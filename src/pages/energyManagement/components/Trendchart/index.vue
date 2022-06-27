<script setup>
import { computed, reactive, watch, toRefs } from "vue";
import { getEnergy2 } from "@/api";
import { useMainStore } from "@/store";
import useRequest from "@/hooks/useRequest";
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
});

const mainStore = useMainStore();
const { data: datas, loading } = useRequest(getEnergy2);

watch(datas, val => {
    state.data = val?.map((el, index) => ({ ...el, key: index + 1 }));
});

// 获取页面title
const title = computed(() => {
    return mainStore.minHeaderTitles?.find(el => el.type === 15)?.title ?? "";
});

let { data } = toRefs(state);
</script>

<template>
    <div>
        <scroll-table :columns="columns" :data="data" :title="title" :loading="loading" />
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";

.keyword {
    padding: calc(14px * @measureSize) 0;
}

.title {
    color: #fff;
    font-size: calc(28px * @measureSize);
    margin-left: calc(48px * @measureSize);
    margin-top: calc(20px * @measureSize);
}

.today-content {
    padding: 0 calc(30px * @measureSize);
    margin-top: calc(10px * @measureSize);
}

.el-col {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}

.today-header {
    background: rgba(255, 255, 255, 0.3);
    color: #ccc;
    padding: calc(25px * @measureSize) 0;
    font-size: calc(14px * @measureSize);
}

.today-key-c {
    overflow: hidden;
    height: 90%;
}

.ti-record-mail {
    color: #fff;
    font-size: calc(14px * @measureSize);
}
</style>
