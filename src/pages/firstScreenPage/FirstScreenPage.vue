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
import {useFirstPageStore, useMainStore} from "@/store";
import {watchEffect, onMounted, computed} from "vue";
import { isEmpty } from 'lodash';

  const firstPageStore = useFirstPageStore();
  const mainStore = useMainStore();
  const chartsInfo = computed(() => firstPageStore.chartsTaskInfo);



  watchEffect(() => {
    if(!isEmpty(mainStore.targetList)){
      firstPageStore.getMapTopIndicatorsTaskAction();
    }

    if(!isEmpty(mainStore.minHeaderTitles)){
      firstPageStore.getLeftAndRightTitActions();
    }
  })

  onMounted(() => {
    firstPageStore.getBarAndLinesTaskAction();
    firstPageStore.getMapTaskList();
  })
</script>

<style scoped>

</style>