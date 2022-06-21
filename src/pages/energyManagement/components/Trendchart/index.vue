<script setup>
import vueSeamless from "vue-seamless-scroll/src";
import { ElRow, ElCol } from "element-plus";
import { computed, reactive, toRef, toRefs } from "vue";
import { getEnergy2 } from "@/api";
import { useMainStore } from "@/store";
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

// 获取园区企业能耗数据
getEnergy2().then(res => {
    if (res?.code == 0) {
        state.data = res.data?.map((el, index) => ({ ...el, key: index + 1 })) ?? [];
    }
});

// 获取页面title
const title = computed(() => {
    return mainStore.minHeaderTitles?.find(el => el.type === 15)?.title ?? "";
})

let { data } = toRefs(state);
</script>

<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="today-content">
            <div class="today-header">
                <el-row>
                    <el-col v-for="(item, index) in columns" :key="index" :span="item.span">{{ item?.title }} </el-col>
                </el-row>
            </div>
            <vueSeamless :data="data" class="today-key-c">
                <div v-for="(items, index) in data" :key="index" class="keyword">
                    <el-row>
                        <el-col class="ti-record-mail" v-for="(item, index) in columns" :key="index" :span="item.span">
                            {{ items[item.key] }}
                        </el-col>
                    </el-row>
                </div>
            </vueSeamless>
        </div>
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
