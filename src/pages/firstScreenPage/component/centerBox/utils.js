/*
 *@description:
 * @author wayne
 * @date 2022-06-17 10:06
*/
import polyline from "@/utils/polyline";
/**
 * 获取地图上显示的markers
 *  * @param AMap
 * @param list
 */

export const getMarkerList = (AMap, list = []) => {

    const getToolTipsContent = (item) => {
        return (
            `
          <div class="tips-container">
            <div class="left-icon"><img src=${require("@/assets/images/p1-map-marker-tips-icon.png")} alt=""/></div>
            <div class="tips-content">
                <div class="tips-name">${item.customer}</div>
                <div class="tips-target">${item.indicatorsValue}<span class="tips-unit"></span></div>
            </div>
          </div>
          `
        )
    };

    // 创建 AMap.Icon 实例：
    const icon = new AMap.Icon({
        size: new AMap.Size(206, 254),    // 图标尺寸
        image: require('@/assets/images/p1-map-marker-icon.png'),  // Icon的图像
        // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(206, 254)   // 根据所设置的大小拉伸或压缩图片
    });

    const newList = (Array.isArray(list) && list.filter(item => item.longitude && item.latitude)) || [];

    return newList.map(item => new AMap.Marker({
            position: new AMap.LngLat(item.longitude, item.latitude),
            // offset: new AMap.Pixel(-10, -10),
            icon: icon, // 添加 Icon 实例
            title: '北京',
            zoom: 13,
            // content: 'tttttttttttttttt'
            label: {
                content: getToolTipsContent(item),
                direction: 'top'
            }
        }))
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