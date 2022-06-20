<script setup>
import { reactive, toRefs, watch } from "vue";

// const data = [
//     {
//         id: "33",
//         customer: "综合能源消费总量",
//         target: "695963",
//         unit: "吨标准煤",
//         increase: "16.6%",
//         type: "4",
//         icon: require("@/assets/images/p1-center-icon-1.png"),
//         color: "#43E086",
//     },
// ];
const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
});
const state = reactive({
    data: [],
});

watch(
    () => props.data,
    val => {
        state.data = val;
    },
    {
        immediate: true,
    },
);

const { data } = toRefs(state);
</script>

<template>
    <div class="title-container">
        <div class="title-container-item" v-for="(item, index) in data" :key="index">
            <div class="icon-box">
                <img :src="item.icon" alt="" />
            </div>
            <div>
                <div class="title-container-h">
                    <span class="title-customer">
                        {{ item.customer }}
                    </span>
                    <span class="title-unit">
                        {{ item.unit }}
                    </span>
                </div>
                <div class="title-target" :style="{ color: item.color }">
                    {{ item.target }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../global.less";
.title-container {
    width: calc(1000px * @measureSize);
    height: calc(150px * @measureSize);
    margin: 0 auto;
    display: flex;
    background: url("../../assets/images/p1-center-top-bg.png") left bottom no-repeat;
    background-size: contain;
    animation: 1000ms ease 1000ms 1 normal both running fadeIn;
    padding: 0 calc(20px * @measureSize);
    justify-content: space-between;
    .title-container-item {
        display: flex;
        .icon-box {
            margin-right: calc(16px * @measureSize);
            width: calc(120px * @measureSize);
            height: calc(120px * @measureSize);
            animation: 1000ms ease 2200ms 1 normal both running fadeIn;
            img {
                width: 100%;
            }
        }
        .title-customer {
            font-size: calc(30px * @measureSize);
            color: #6fb6f9;
        }
        .title-unit {
            font-size: calc(14px * @measureSize);
            margin-left: calc(14px * @measureSize);
            color: #1ac9ff;
        }
        .title-target {
            font-size: calc(45px * @measureSize);
            color: #6fb6f9;
            text-align: center;
            font-weight: bold;
            letter-spacing: calc(2px * @measureSize);
        }
        .title-container-h {
            margin-top: calc(13px * @measureSize);
        }
    }
}
</style>
