<template>
  <div class="chart-card-box">
    <div class="chart-title">{{chartInfo?.targetName}}</div>
    <div class="chart">
      <Chart :chartInfo="chartInfo"/>
    </div>
  </div>
</template>

<script>
import Chart from "../chart/Chart";
export default {
  name: "ChartsCard",
  components: {Chart},
  props: ['chartInfo'],
}
</script>

<style scoped lang="less">
@import "index.less";

</style>