<template>
  <BarChart v-if="chartInfo.type === CHARTS_TYPE.BAR" :data="chartInfo"/>
  <LineChart v-else-if="chartInfo.type === CHARTS_TYPE.LINE" :data="chartInfo"/>
</template>

<script>
import BarChart from "./barChart/BarChart";
import LineChart from "./lineChart/LineChart";
import { CHARTS_TYPE } from "@/constants";
export default {
  name: "Chart",
  components: {LineChart, BarChart},
  props: ['chartInfo', 'chartData'],
  data(){
    return({
      CHARTS_TYPE
    })
  }
}
</script>

<style scoped>

</style>