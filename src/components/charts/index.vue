<script setup>
import { defineProps, onMounted, reactive, ref, watch } from "vue";
import * as echarts from "echarts";
const props = defineProps({
    options: {
        type: Object,
        default: {},
    },
    height: {
        type: String,
        default: "300",
    },
});
const state = reactive({
    options: {},
});
console.log(props.options, ".......");
watch(
    () => props.options,
    val => {
        console.log(val, "........");
        state.options = val;
        myCharts.value.setOption(val);
    },
);

const echartsDom = ref(null);
const myCharts = ref(null);
onMounted(() => {
    state.options = props.options;
    if (echartsDom.value) {
        let myChart = echarts.init(echartsDom.value);
        myCharts.value = myChart;
        // 绘制图表
        myChart.setOption(props.options);
    }

    window.onresize = function () {
        //自适应大小
        myCharts.value.resize();
    };
});

defineExpose({
    myCharts,
});
</script>

<template>
    <div class="comEcharts" :style="{ height: props.height + 'px' }" ref="echartsDom"></div>
</template>

<style lang="less">
.comEcharts {
    width: 100%;
    animation: 5s ease 3s 1 normal both running bounceInLeft;
}
</style>
