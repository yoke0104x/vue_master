<script setup>

import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";

const chartDom = ref(null)
let chart = null;
const props = defineProps({
  option: Object,
  title: String
})

onMounted(() => {
  const myChart = echarts.init(chartDom.value);
  props.option && myChart.setOption(props.option);
})

watch(() => props.option, (newOption) => {

  chart && chart.setOption(newOption)
})

</script>

<template>
  <div class="chart-card">
    <div class="chart-title">{{props.title}}</div>
    <div class="chart">
      <div class="chart-container" ref="chartDom"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "../../../../../global.less";


.chart-card{
  width: 45%;
  height: 50%;
  display: flex;
  flex-direction: column;

  &:nth-of-type(1), &:nth-of-type(2){
    margin-bottom: calc(30px * @measureSize);
  }

  .chart-title{
    font-size: calc(25px * @measureSize);
    color: #fff;
    margin-bottom: calc(20px * @measureSize);
  }

  .chart{
    flex: 1;
    padding-top: 10%;

    .chart-container{
      height: 100%;
      width: 100%;
    }
  }
}

</style>