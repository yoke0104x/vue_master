<script setup>
import LeftScrollTable from "./components/leftScrollTable";
import RightCharts from './components/rightCharts';
import CarbonAnalysis from './components/carbonAnalysis/Index';

</script>


<template>

  <content-left>
    <left-scroll-table/>
  </content-left>

  <content-center>
    <carbon-analysis/>
  </content-center>

  <content-right>
    <right-charts/>
  </content-right>

</template>

<style scoped lang="less">


</style>