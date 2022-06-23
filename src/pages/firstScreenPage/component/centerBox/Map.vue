<template>
    <div class="map-wrap">
      <second-title :name="title" :class="['map-title']"/>
        <MapView
            :currentId="currentId"
            :data="mapTaskData"
            :markerConfig="markerConfig"
            id="firstPage"
            :onChangeCurrentId="handleChangeCurrentId"
        />
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useFirstPageStore } from "@/store";
import MapView from '@/components/mapView/Index';

export default {
    name: "Map",
  components: {MapView},
    data() {
        return {
            title: "德阳经济技术开发区",
            markerConfig: {
                url: require('@/assets/images/p1-map-marker-icon.png'),
                width: 206,
                height: 254,
                showTarget: true,
                toolTipsName: 'customer'
            },
            currentId: null
        };
    },
    computed: {
        ...mapState(useFirstPageStore, ["mapTaskData"]),
    },
    watch: {
      mapTaskData: function (val){
        this.currentId = val[0]?.id;
      }
    },
  methods: {
      handleChangeCurrentId(id){
        this.currentId = id;
      }
  }
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
    }
}
</style>
