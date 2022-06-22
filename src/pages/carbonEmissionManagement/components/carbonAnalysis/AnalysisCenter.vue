<template>
<div class="map-container">
  <map-view id="carbon" :data="data" :markerIconConfig="state.markerIconConfig"/>
</div>
</template>

<script setup>
import MapView from '@/components/mapView/Index'
import {computed, reactive, toRef, watchEffect} from "vue";
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";

const carbonEmissionStore = useCarbonEmissionStore();

const data = computed(() => carbonEmissionStore.analysisList)

const state = reactive({
  markerIconConfig: {
    url: require('@/assets/images/p1-map-marker-icon.png'),
    width: 206,
    height: 254
  }
})



</script>

<style scoped lang="less">
@import "../../../../global";
.map-container{
  flex: 1;
  padding-bottom: calc(95px * @measureSize);
}

</style>