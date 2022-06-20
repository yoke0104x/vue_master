<script setup>
import LinkRatio from "@/components/LinkRatio";
import TitleCard from "@/components/TitleCard";
import charts from "@/components/charts";
import { useMainStore } from "@/store";
import { computed, reactive, watch } from "vue";

const state = reactive({
    option: {},
});
const mainStore = useMainStore();
const lineRatioData = computed(() => mainStore.targetList?.find(el => el.id === "33"));
const echartData = computed(() => mainStore.energyList?.filter(el => el.categoryType === "1"));

watch(
    echartData,
    val => {
        setOption(val);
    },
    {
        immediate: true,
    },
);
// 设置option
function setOption(val) {
    if (val.length > 0) {
        let legendData = val.map(el => ({
            name: el.category,
            value: el.energyConsumption,
        }));

        var datas = [];
        var color = ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"];
        for (var i = 0; i < legendData.length; i++) {
            datas.push(
                {
                    value: legendData[i].value,
                    name: legendData[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 6,
                            shadowBlur: 20,
                            borderColor: color[i],
                            shadowColor: color[i],
                            borderRadius: 50,
                        },
                    },
                },
                {
                    value: legendData?.map(el => el.value)?.reduce((a, b) => a * 1 + b * 1, 0) / legendData?.length / 7,
                    name: "",
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: "rgba(0, 0, 0, 0)",
                            borderColor: "rgba(0, 0, 0, 0)",
                            borderWidth: 0,
                        },
                    },
                },
            );
        }
        var seriesOption = [
            {
                name: "",
                type: "pie",
                clockWise: false,
                radius: [450, 500],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                    },
                },
                data: datas,
            },
        ];

        let options = {
            color: color,
            title: {
                text: "终端能耗构成",
                top: "48%",
                textAlign: "center",
                left: "49%",
                textStyle: {
                    color: "#fff",
                    fontSize: 25 * 3,
                    fontWeight: "400",
                },
            },
            tooltip: {
                show: false,
            },
            legend: {
                itemHeight: 20 * 3,
                itemWidth: 20 * 3,
                icon: "rect",
                orient: "horizontal",
                data: legendData?.map(el => el.name),
                top: 0,
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 20 * 3,
                    padding: [0, 0, 0, 20 * 2],
                },
                itemGap: 203,
            },
            toolbox: {
                show: false,
            },
            series: seriesOption,
        };
        state.option = options;
        let index = 0;
        let title = [];
        setInterval(() => {
            if (index < legendData.length) {
                index++;
            } else {
                index = 0;
            }
            let total = legendData?.map(el => el.value)?.reduce((a, b) => a * 1 + b * 1, 0);
            let percent = ((legendData[index].value / total) * 100).toFixed(0);
            title = [
                {
                    text: legendData[index].name,
                    top: "38%",
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        color: "#FFCA3E",
                        fontSize: 25 * 3,
                    },
                },
                {
                    text: percent + "%",
                    top: "48%",
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        color: "#FFCA3E",
                        fontSize: 60 * 3,
                        fontWeight: 800,
                    },
                },
            ];
            state.option = {
                ...state.option,
                title: title,
            };
        }, 10000);
    }
}
</script>

<template>
    <div class="center-box-left">
        <div class="card-ratio">
            <LinkRatio :data="lineRatioData" />
        </div>

        <div class="constitute">
            <TitleCard title="终端能耗构成" />
        </div>

        <charts class="card-echarts" height="1800" :options="state.option" />
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
.center-box-left {
    height: 100%;
}
.card-ratio {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(76px * @measureSize);
}
.constitute {
    margin-top: calc(86px * @measureSize);
    display: flex;
    justify-content: center;
}
.card-echarts {
    margin-top: calc(67px * @measureSize);
}
</style>
