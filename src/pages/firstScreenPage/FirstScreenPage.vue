<template>
  <content-left>
    <ChartBox :list="chartsInfo.leftChartsList" :loading="chartsInfo.loading"/>
  </content-left>

  <content-center>
    <CenterBox/>
  </content-center>

  <content-right>
    <ChartBox :list="chartsInfo.rightChartsList" :loading="chartsInfo.loading"/>
  </content-right>

</template>

<script setup>
import ChartBox from "@/pages/firstScreenPage/component/chartBox/ChartBox";
import CenterBox from "@/pages/firstScreenPage/component/centerBox/CenterBox";
import {useFirstPageStore} from "@/store";
import {watchEffect, ref, onMounted, computed} from "vue";

  const firstPageStore = useFirstPageStore();
  const chartsInfo = computed(() => firstPageStore.chartsTaskInfo);



// watchEffect(() => {
  //   if(!firstPageStore.chartsTaskInfo.loading){
  //     chartsInfo.value = firstPageStore.chartsTaskInfo;
  //   }
  // })

  onMounted(() => {
    firstPageStore.getBarAndLinesTaskAction();
    firstPageStore.getMapTopIndicatorsTaskAction();
    firstPageStore.getMapTaskList();
    firstPageStore.getLeftAndRightTitActions();
  })
</script>

<style scoped>

</style>