<script setup>
import AnalysisLeft from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisLeft/AnalysisLeft";
import AnalysisCenter from "@/pages/carbonEmissionManagement/components/carbonAnalysis/AnalysisCenter";
import AnalysisRight from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisRight/AnalysisRight";
import {computed, reactive, toRef, watch, watchEffect} from "vue";
import { isNull, isEmpty, find, isEqual } from 'lodash';
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";

const carbonEmissionStore = useCarbonEmissionStore();

const state = reactive({
  currentId: null
})


watch(() => carbonEmissionStore.analysisList, (val) => {
  if(isNull(state.currentId) && !isEmpty(val)){
    state.currentId = val[0]?.id;
  }
}, {immediate: true})


const getCurrentInfo = () => {
  const list = carbonEmissionStore.analysisList;
  return find(list, item => isEqual(item.id, state.currentId));
}

const getCurrentDetail = () => {

  const target = getCurrentInfo();

  const info = {
    tag: '',
    name: '',
    list: []
  }
  if(target){
    info.tag = `${target.categoryName}企业`;
    info.name = target.companyName;
    const newList = [
      {name: '行业类别', value: target.industory, unit: null, color: '#FFC804'},
      {name: '综合能耗', value: target.energyConsumption, unit: 'tce', color: '#AFFF04'},
      {name: '碳排放量', value: target.carbonEmission, unit: 'tco2', color: '#04C3FF'},
      {name: '单位工业产值碳排放量', value: target.industrialCarbonEmission, unit: 'tco2/万元', color: '#FF4F04'}
    ];
    info.list = newList;
  }
  return info;
}

const getChartInfo = () => {

  const target = getCurrentInfo();

  const info = {
    name: '',
    list: [],
  }
  if(target){
    info.list = [
      {
        'name': '天然气',
        'value': target?.naturalGas ?? 0
      },
      {
        'name': '电力',
        'value': target?.electricPower ?? 0
      },
      {
        'name': '煤炭',
        'value': target?.coal ?? 0
      },
      {
        'name': '其他',
        'value': target?.others ?? 0
      },
    ];

    info.name = target.companyName;
  }

  return info;
}

const handleChangeCurrentId = (id) => {
  state.currentId = id;
}



</script>


<template>
  <div class="analysis-container">
    <analysis-left :detailInfo="getCurrentDetail()"/>
    <analysis-center
        :currentId="state.currentId"
        :onChangeCurrentId="handleChangeCurrentId"
    />
    <analysis-right :detailInfo="getChartInfo()"/>
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