<script setup>

import {onMounted, reactive, watchEffect, toRefs} from "vue";
import {useCarbonEmissionStore} from "@/store/carbonEmissionStore";


const carbonEmissionStore = useCarbonEmissionStore();
const columns = [
  {
    title: "序号",
    key: "key",
    span: 2,
  },
  {
    title: "企业名称",
    key: "companyName",
    span: 6,
  },
  {
    title: "行业",
    key: "industry",
    span: 5,
  },
  {
    title: "碳排放量(吨CO₂)",
    key: "co2Discharge",
    span: 4,
  },
  {
    title: "单位工业产值碳排放量(吨CO₂/万元)",
    key: "uintDischarge",
    span: 7,
  },
];

const state = reactive({
  title: "",
  data: [],
  loading: true
})

onMounted(() => {
  carbonEmissionStore.getCarbonEmissionsAction();

  carbonEmissionStore.getCarbonEmissionTitleAction();
})

watchEffect(() => {
  if(!carbonEmissionStore.carbonEmissions.loading){
    state.data = carbonEmissionStore.carbonEmissions.data?.map((el, index) => ({ ...el, key: index + 1 }));
    state.loading = false
  }

  if(carbonEmissionStore.carbonEmissions.title){
    state.title = carbonEmissionStore.carbonEmissions.title;
  }
})

const { data, title, loading } = toRefs(state);

</script>

<template>
  <scroll-table :columns="columns" :data="data" :title="title" :loading="loading"/>
</template>

<style scoped>

</style>