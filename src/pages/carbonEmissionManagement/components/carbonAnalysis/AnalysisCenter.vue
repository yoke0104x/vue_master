<template>
<div class="map-container">
  <img src="../../../../assets/images/map-masker.png" alt=""  class="map-mask"/>
  <map-view
      id="carbon"
      :data="data"
      :markerConfig="state.markerConfig"
      :currentId="props.currentId"
      :onChangeCurrentId="props.onChangeCurrentId"
  />
</div>
</template>

<script setup>
import MapView from '@/components/mapView/Index'
import {computed, reactive, toRef, watchEffect} from "vue";
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";

const carbonEmissionStore = useCarbonEmissionStore();

const data = computed(() => carbonEmissionStore.analysisList)

const props = defineProps({
  currentId: String,
  onChangeCurrentId: Function
})

const state = reactive({
  markerConfig: {
    url: '',
    width: 162,
    height: 180,
    showTarget: false,
    toolTipsName: 'companyName',
    handleGetIcon: (info) => {
      if(info.id === props.currentId){
        return require('@/assets/images/carbon-marker-selected.png')
      }
      switch (info?.categoryName){
        case '大型':
          return require('@/assets/images/carbon-marker-big.png');
        case '中型':
          return require('@/assets/images/carbon-marker-middle.png');
        case '小型':
          return require('@/assets/images/carbon-marker-small.png');
        default:
            return require('@/assets/images/carbon-marker-big.png')
      }
    }
  }
})



</script>

<style scoped lang="less">
@import "../../../../global";
.map-container{
  flex: 1;
  padding-bottom: calc(95px * @measureSize);
  position: relative;

  .map-view{
    height: 100%;
  }
  .map-mask{
    width: calc(783.33px * @measureSize);
    height: calc(31.33px * @measureSize);
    position: absolute;
    left: 50%;
    margin-left: calc(calc(783.33px * @measureSize) / -2);
    z-index: 1;
  }

}

</style>