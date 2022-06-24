<script setup>
import useRequest from "@/hooks/useRequest";
import { getCirculation1, getCirculation3 } from "@/api";
import { useMainStore } from "@/store";
import { computed, ref, watch } from "vue";
const columns = [
  {
    title: "序号",
    key: "key",
    span: 2,
  },
  {
    title: "项目名称",
    key: "projectName",
    span: 6,
  },
  {
    title: "实施单位",
    key: "workUnit",
    span: 8,
  },
  {
    title: "计划投资(万元)",
    key: "plansInvest",
    span: 3,
  },
  {
    title: "完成投资(万元)",
    key: "completeInvest",
    span: 3,
  },
  {
    title: "投资完成率",
    key: "rate",
    span: 2,
  },
];
const { data: datas, loading } = useRequest(getCirculation1);
const mainStore = useMainStore();
const data = ref([])

const title = computed(() => {
  return mainStore.minHeaderTitles?.find(el => el.type == "7")?.title;
});

watch(datas,val=>{
  data.value = val?.map((el, index) => ({ ...el, key: index + 1 }));
})

</script>

<template>
  <div>
    <scroll-table :columns="columns" :data="data" :title="title" :loading="loading" />
  </div>
</template>

<style lang="less" scoped></style>
