<script setup>
import useRequest from "@/hooks/useRequest";
import { getCirculation3 } from "@/api";
import { useMainStore } from "@/store";
import { computed, ref, watch } from "vue";
const columns = [
  {
    title: "序号",
    key: "key",
    span: 2,
  },
  {
    title: "指标名称",
    key: "customer",
    span: 6,
  },
  {
    title: "单位",
    key: "unit",
    span: 4,
  },
  {
    title: "2015年",
    key: "year1",
    span: 2,
  },
  {
    title: "2018年",
    key: "year2",
    span: 3,
  },
  {
    title: "2021年目标",
    key: "yearTarget",
    span: 3,
  },
  {
    title: "2021年完成值",
    key: "yearComplete",
    span: 3,
  },
];
const { data: datas, loading } = useRequest(getCirculation3);
const mainStore = useMainStore();
const data = ref([])

const title = computed(() => {
    return mainStore.minHeaderTitles?.find(el => el.type == "6")?.title;
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
