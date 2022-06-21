<script setup>
import AnalysisLeft from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisLeft/AnalysisLeft";
import AnalysisCenter from "@/pages/carbonEmissionManagement/components/carbonAnalysis/AnalysisCenter";
import AnalysisRight from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisRight/AnalysisRight";
</script>


<template>
  <div class="analysis-container">
    <analysis-left/>
    <analysis-center/>
    <analysis-right/>
  </div>

</template>

<style scoped lang="less">
@import "../../../../global";

.analysis-container{
  width: 100%;
  height: 100%;
  background: url("../../../../assets/images/p3-analysis-bg.png") left top no-repeat;
  background-size: cover;
  margin-top: calc(-82px * @measureSize);
  padding: calc(83px * @measureSize) calc(32px * @measureSize) 0;
  display: flex;
}

</style>