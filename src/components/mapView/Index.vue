<script>

import { shallowRef } from "@vue/reactivity";
import AMapLoader from "@amap/amap-jsapi-loader";
import {getMarkerList, setPolyLine} from "./utils";

// data
// [
//   {
//     "id": 20,
//     "customer": "工业总产值",
//     "target": "达到784亿元，加上东锅德阳基地达到816亿元",
//     "indicatorsValue": "784亿元",
//     "longitude": "104.41702",
//     "latitude": "31.14263",
//     "type": "1"
//   }
// ]

// markerIconConfig
// {
//   width,
//   height,
//   url
// }
export default {
  name: "Map",
  props: ['id', 'data', 'markerIconConfig'],
  setup() {
    const map = shallowRef(null);
    return {
      map,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "d1de02fc77a8d8d1bad0e259b1ea2dd6", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
          .then(AMap => {
            const config = {
              markerIconConfig: this.markerIconConfig
            }
            const markers = getMarkerList(AMap, this.data, config);

            this.map = new AMap.Map(`map-view-${this.id}`, {
              mapStyle: 'amap://styles/fdbb98face95063a17e8ed639ad2027b',
              //设置地图容器id
              viewMode: "3D", //是否为3D地图模式
              zoom: 12, //初始化地图级别
              center: [104.362528, 31.048678], //初始化地图中心点位置
              dragEnable: false, //地图是否可以平移
              zoomEnable: false, //地图是否可以缩放
            }).add(markers).add(setPolyLine())
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};

</script>


<template>

  <div class="map-view" :id="[`map-view-${id}`]">
    <img class="map-bg" src="../../assets/images/p1-map-bg.png" alt="" />
  </div>
</template>

<style scoped lang="less">
@import "../../global";

.map-view{
  height: 100%;
  width: 100%;
  position: relative;

  .map-bg {
    //pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1000;
    //display: none;
  }

  /deep/ .amap-marker-label {
    border: none;

    .tips-container {
      width: calc(229px * @measureSize);
      height: calc(108px * @measureSize);
      background: url("../../assets/images/p1-map-tips-bg.png") no-repeat;
      background-size: cover;
      padding: calc(15px * @measureSize) calc(17px * @measureSize) calc(5px * @measureSize);
      display: flex;
      align-items: flex-start;

      .left-icon {
        width: calc(19px * @measureSize);
        height: calc(18px * @measureSize);
        margin-right: calc(18px * @measureSize);
        flex-shrink: 0;

        > img {
          width: 100%;
        }
      }

      .tips-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .tips-name {
          color: #4bdfff;
          font-size: calc(16px * @measureSize);
          height: calc(18px * @measureSize);
          line-height: calc(18px * @measureSize);
          text-align: left;
        }

        .tips-target {
          font-weight: bold;
          font-size: calc(50px * @measureSize);
          line-height: normal;
          text-align: left;
          color: rgb(67, 224, 134);
          //animation: 1000ms ease 2000ms 1 normal both running fadeInDown;

          .tips-unit {
            color: #1ac9ff;
            font-weight: bold;
            font-size: calc(20px * @measureSize);
            line-height: normal;
            text-align: left;
            margin-left: calc(10px * @measureSize);
          }
        }
      }
    }
  }
}

</style>