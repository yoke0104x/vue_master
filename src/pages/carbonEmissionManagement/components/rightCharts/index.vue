<script setup>
import ChartCard from "./chartCard";
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";
import {onMounted, reactive, watchEffect} from "vue";
import {getCharts} from "@/pages/carbonEmissionManagement/components/rightCharts/utils";


const carbonEmissionStore = useCarbonEmissionStore();
const state = reactive({
  loading: true,
  charts: []
})


onMounted(() => {
  carbonEmissionStore.getRightChartsData();
})

watchEffect(() => {
  if(!carbonEmissionStore.carbonCharts.loading){
    state.loading = carbonEmissionStore.carbonCharts.loading;
    state.charts = getCharts(carbonEmissionStore.carbonCharts.charts);
  }
})

</script>



<template>
  <Loading :loading="state.loading">
    <div class="chart-box">
      <chart-card
          v-for="(info, index) in state.charts"
          :key="index"
          v-bind="info"
      />
    </div>
  </Loading>

</template>


<style scoped lang="less">
@import "../../../../global.less";
.chart-box{
  height: 100%;
  width: 100%;
  padding: calc(46px * @measureSize);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>