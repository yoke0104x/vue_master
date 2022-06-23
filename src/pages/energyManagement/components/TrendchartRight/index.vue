<script setup>
import charts from "@/components/charts";
import { computed, reactive, toRefs, watch } from "vue";
import useRequest from "@/hooks/useRequest";
import { getEnergy3 } from "@/api";
import { useMainStore } from "@/store";
const state = reactive({
    option: {},
});

// 矢量图
const pathSymbols = {
    reindeer:
        "path://M762.660796 332.779048l-119.210905-3.612452 79.473937-182.428809h-242.034262l-115.598453 281.77123 110.179776 9.031129-108.37355 254.670618 111.986001 1.806226-1.806225 196.878616 193.266164-290.80236H556.751051zz",
    plane: "path://M762.660796 332.779048l-119.210905-3.612452 79.473937-182.428809h-242.034262l-115.598453 281.77123 110.179776 9.031129-108.37355 254.670618 111.986001 1.806226-1.806225 196.878616 193.266164-290.80236H556.751051z",
};

// 配置图表
const labelSetting = {
    show: true,
    position: "top",
    offset: [10 * 3, 0],
    color: "#fff",
    fontSize: 16 * 3,
};

const { data } = useRequest(getEnergy3);
const mainStore = useMainStore();
const title = computed(() => mainStore.minHeaderTitles?.find(el => el.type === 14)?.title ?? "");

/**
 * 监听数据请求
 */
watch(data, val => {
    let { months, years, yearsVlaue } = val;
    const _options = [
        makeOption("pictorialBar", "", months, years, yearsVlaue),
        makeOption("bar", "", months, years, yearsVlaue),
        makeOption("pictorialBar", "diamond", months, years, yearsVlaue),
    ];
    var optionIndex = 0;
    setInterval(function () {
        optionIndex = (optionIndex + 1) % _options.length;
        state.option = _options[optionIndex];
    }, 10000);
    optionIndex = (optionIndex + 1) % _options.length;
    state.option = _options[optionIndex];
});

// echarts配置
const makeOption = (type, symbol, months, years, yearsVlaue) => {
    let _data1 = [];
    let _data2 = [];
    yearsVlaue[0].value.forEach(e => {
        _data1.push({
            value: e,
            symbol: symbol || pathSymbols.reindeer,
        });
    });
    yearsVlaue[1].value.forEach(e => {
        _data2.push({
            value: e,
            symbol: symbol || pathSymbols.plane,
        });
    });
    return {
        legend: {
            data: years ?? [],
            textStyle: { fontSize: 24 * 3, color: "#fff" },
            itemWidth: 24 * 3,
            itemHeight: 24 * 3,
            itemGap: 15 * 3,
            top: "5%",
            // 禁止点击
            selectedMode: false,
            icon: "rect",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            textStyle: {
                fontSize: 24 * 3,
            },
        },
        grid: {
            left: "2%",
            right: "4%",
            bottom: "5%",
            top: "15%",
            containLabel: true,
        },
        yAxis: {
            // axisTick: { show: false },
            axisLabel: {
                color: "#fff",
                fontSize: 16 * 3,
            },
            type: "value",
            axisTick: {
                lineStyle: {
                    color: "#516189",
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#516189",
                },
            },
        },
        xAxis: {
            data: months ?? [],
            // splitLine: { show: false },
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "#516189",
                },
            },
            axisLabel: {
                color: "#fff",
                fontSize: 16 * 3,
            },
            type: "category",
        },
        animationDurationUpdate: 500,
        series: [
            {
                name: years[0] ?? "",
                id: "bar1",
                type: type,
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ["80%", "60%"],
                barCategoryGap: "40%",
                universalTransition: {
                    enabled: true,
                    delay: function (idx, total) {
                        return (idx / total) * 1000;
                    },
                },
                data: _data1,
            },
            {
                name: years[1] ?? "",
                id: "bar2",
                type: type,
                barGap: "10%",
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ["80%", "60%"],
                universalTransition: {
                    enabled: true,
                    delay: function (idx, total) {
                        return (idx / total) * 1000;
                    },
                },
                data: _data2,
            },
        ],
    };
};

const { option } = toRefs(state);
</script>

<template>
    <div class="box">
        <div class="title">{{title}}</div>
        <charts class="card-echarts" height="2800" :options="option" />
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
.title {
    font-size: calc(32px * @measureSize);
    color: #fff;
    margin-left: calc(40px * @measureSize);
    margin-top: calc(20px * @measureSize);
}
</style>
