<template>
  <div class="map-wrap">
    <div class="map-title">{{title}}</div>
    <div id="p1-map-container"></div>
  </div>
</template>

<script>
import { shallowRef } from '@vue/reactivity'
import AMapLoader from '@amap/amap-jsapi-loader';


export default {
  name: "Map",
  setup(){
    const map = shallowRef(null);
    return{
      map,
    }
  },
  data(){
    return({
      title: '德阳经济技术开发区'
    })
  },
  methods:{
    initMap(){
      AMapLoader.load({
        key:"2af00498dbcf7869de4f38e932ef0e46",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{

        // 创建 AMap.Icon 实例：
        const icon = new AMap.Icon({
          size: new AMap.Size(206, 254),    // 图标尺寸
          image: require('@/assets/images/p1-map-marker-icon.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(206, 254)   // 根据所设置的大小拉伸或压缩图片
        });

        // 将 Icon 实例添加到 marker 上:
        const marker = new AMap.Marker({
          position: new AMap.LngLat(116.405467, 39.907761),
          // offset: new AMap.Pixel(-10, -10),
          icon: icon, // 添加 Icon 实例
          title: '北京',
          zoom: 13,
          // content: 'tttttttttttttttt'
          label: {
            content: `<div class="marker-tooltip">tttttttttttt</div>`,
            direction: 'top'
          }
        });



        this.map = new AMap.Map("p1-map-container",{  //设置地图容器id
          viewMode:"3D",    //是否为3D地图模式
          zoom:5.5,           //初始化地图级别
          center:[105.602725,37.076636], //初始化地图中心点位置
          dragEnable: false, //地图是否可以平移
          zoomEnable: false, //地图是否可以缩放
        }).add(marker);

        console.log('===============:', new AMap.icon)

      }).catch(e=>{
        console.log(e);
      })
    },
  },
  mounted(){
    //DOM初始化完成进行地图初始化
    this.initMap();
  }
}
</script>

<style scoped lang="less">
@import "../../../../global.less";

  .map-wrap{
    height: 100%;
    width: 100%;
    padding: calc(38px * @measureSize) calc(56px * @measureSize) calc(108px * @measureSize);

    .map-title{
      width: calc(675px * @measureSize);
      height: calc(76px * @measureSize);
      color: #19C0F6;
      font-family: jed;
      font-weight: bold;
      font-size: calc(40px * @measureSize);
      line-height: 2;
      letter-spacing: calc(4px * @measureSize);
      text-align: center;
      background: url("../../../../assets/images/p1-map-title-bg.png") no-repeat;
      background-size: contain;
      margin: 0 auto calc(10px * @measureSize);
    }

    #p1-map-container{
      width: 100%;
      height: calc(100% - calc(86px * @measureSize));

      ///deep/ .amap-icon{
      //  width: calc(157px * @measureSize)!important;
      //  height: calc(155px * @measureSize)!important;
      //
      //  img{
      //    width: 100%!important;
      //    height: auto !important;
      //  }
      //}

      /deep/ .marker-tooltip{
        font-size: 100px;
        color: red;
      }
    }
  }


</style>