<script setup>
import TitleWithStatistics from "@/pages/carbonEmissionManagement/components/carbonAnalysis/TitleWithStatistics";
import Analysis from "@/pages/carbonEmissionManagement/components/carbonAnalysis/Analysis";
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";
import {onMounted} from "vue";

const carbonEmissionStore = useCarbonEmissionStore();

onMounted(() => {
  carbonEmissionStore.getAnalysisList();
})

</script>


<template>

  <div class="container">
    <title-with-statistics/>

    <div class="analysis-box">
      <analysis/>
    </div>
  </div>

</template>

<style scoped lang="less">
@import "../../../../global";

.container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  .analysis-box{
    flex: 1;
    padding: 0 calc(300px * @measureSize);
  }
}
</style>