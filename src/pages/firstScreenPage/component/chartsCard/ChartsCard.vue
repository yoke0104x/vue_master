<template>
  <div class="chart-card-box">
    <div class="chart-title">{{chartData?.targetName}}</div>
    <div class="chart">
      <Chart :chartInfo="chartInfo" :chartData="chartData"/>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/chart/Chart";
export default {
  name: "ChartsCard",
  components: {Chart},
  props: ['chartInfo', 'chartData'],
}
</script>

<style scoped lang="less">
@import "index.less";

</style>