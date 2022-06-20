<script setup>
import vueSeamless from "vue-seamless-scroll/src";
import { ElRow, ElCol } from "element-plus";
import { reactive, toRef, toRefs } from "vue";
import { getEnergy2 } from "@/api";
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
        title: "2020年度能耗(tce)",
        key: "beforTce",
        span: 6,
    },
    {
        title: "2021年度能耗(tce)",
        key: "afterTce",
        span: 6,
    },
    {
        title: "涨幅(%)",
        key: "increase",
        span: 4,
    },
];
const state = reactive({
    data: [],
    title: '园区企业能耗涨幅',
    loading: true
});

// 获取园区企业能耗数据
getEnergy2().then(res => {
    if (res?.code == 0) {
        state.data = res.data?.map((el, index) => ({ ...el, key: index + 1 })) ?? [];
        state.loading = false;
    }
});

let { data, title, loading } = toRefs(state);
</script>

<template>
    <scroll-table :title="title" :columns="columns" :data="data" :loading="loading"/>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
</style>
