/*
 *@description:
 * @author wayne
 * @date 2022-06-17 10:06
*/
import polyline from "@/utils/polyline";
import { isFunction } from 'lodash';
/**
 * 获取地图上显示的markers
 *  * @param AMap
 * @param list
 */

export const getMarkerList = (AMap, list = [], { markerConfig }, {currentId, onMarketItemClick}) => {

    const getToolTipsContent = (item) => {
        return (
            `
          <div class="tips-container">
            <div class="left-icon"><img src=${require("@/assets/images/p1-map-marker-tips-icon.png")} alt=""/></div>
            <div class="tips-content">
                <div class="tips-name">${item[markerConfig.toolTipsName]}</div>
                <div class="tips-target" style="display: ${markerConfig.showTarget ? 'block' : 'none'}">${item.indicatorsValue}<span class="tips-unit">${item.unit}</span></div>
            </div>
          </div>
          `
        )
    };



    const getIcon = function (item){
        // 创建 AMap.Icon 实例：
        return new AMap.Icon({
            size: new AMap.Size(markerConfig.width, markerConfig.height),    // 图标尺寸
            image: markerConfig.url ? markerConfig.url : (isFunction(markerConfig.handleGetIcon) && markerConfig.handleGetIcon(item)),  // Icon的图像
            // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(markerConfig.width, markerConfig.height)   // 根据所设置的大小拉伸或压缩图片
        });
    }


    return list.map(item => {

        const option = {
            position: new AMap.LngLat(item.longitude, item.latitude),
            // offset: new AMap.Pixel(-10, -10),
            icon: getIcon(item), // 添加 Icon 实例
            zoom: 13,
            bubble: false,
            clickable: true,
            zIndex: 1,
            // content: 'tttttttttttttttt'
        };

        if(currentId === item.id){
            option.label = {
                content: getToolTipsContent(item),
                direction: 'top'
            };
            option.zIndex = 100;
        }

        const markerItem = new AMap.Marker(option)
        markerItem.on('mouseover', (e) => {
            onMarketItemClick(item.id)
            // e.target?.setLabel({
            //     content: getToolTipsContent(item)
            // })
        })
        // console.log('========click:', markerItem, markerItem.hasEvents('click'));



        return markerItem;
    })
}

export const setPolyLine=()=>{
    return new AMap.Polyline({
        path: polyline,
        isOutline: true,
        outlineColor: '#ffeeff',
        borderWeight: 3,
        strokeColor: "#3366FF",
        strokeOpacity: 1,
        strokeWeight: 6,
        // 折线样式还支持 'dashed'
        strokeStyle: "solid",
        // strokeStyle是dashed时有效
        strokeDasharray: [10, 5],
        lineJoin: 'round',
        lineCap: 'round',
        zIndex: 50,
    })
}