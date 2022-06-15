<template>
  <BarChart v-if="chartInfo.type === barType" :data="chartData"/>
  <LineChart v-else-if="chartInfo.type === lineType"/>
</template>

<script>
import BarChart from "@/components/chart/barChart/BarChart";
import LineChart from "@/components/chart/lineChart/LineChart";
import {BAR, LINE} from "@/constants";
export default {
  name: "Chart",
  components: {LineChart, BarChart},
  props: ['chartInfo', 'chartData'],
  data(){
    return({
      barType: BAR,
      lineType: LINE
    })
  }
}
</script>

<style scoped>

</style>