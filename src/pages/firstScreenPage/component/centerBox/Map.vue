<template>
    <div class="map-wrap">
      <second-title :name="title" :class="['map-title']"/>
        <div id="p1-map-container">
            <img class="map-bg" src="../../../../assets/images/p1-map-bg.png" alt="" />
        </div>
    </div>
</template>

<script>
import { shallowRef } from "@vue/reactivity";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapState } from "pinia";
import { useFirstPageStore } from "@/store";
import {getMarkerList, setPolyLine} from "@/pages/firstScreenPage/component/centerBox/utils";

export default {
    name: "Map",
    setup() {
        const map = shallowRef(null);
        return {
            map,
        };
    },
    data() {
        return {
            title: "德阳经济技术开发区",
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
                    const markers = getMarkerList(AMap, this.mapTaskData);

                    this.map = new AMap.Map("p1-map-container", {
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
    computed: {
        ...mapState(useFirstPageStore, ["mapTaskData"]),
    },
    mounted() {
        //DOM初始化完成进行地图初始化
        this.initMap();
    },
};
</script>

<style scoped lang="less">
@import "../../../../global.less";

.map-wrap {
    height: 100%;
    width: 100%;
    padding: calc(38px * @measureSize) calc(56px * @measureSize) calc(108px * @measureSize);
    animation: 1000ms ease 3000ms 1 normal both running fadeIn;

    .map-title {
        margin: 0 auto calc(10px * @measureSize);
    }

    #p1-map-container {
        width: 100%;
        height: calc(100% - calc(86px * @measureSize));
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
                background: url("../../../../assets/images/p1-map-tips-bg.png") no-repeat;
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
}
</style>
