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
const lineRatioData = computed(() => mainStore.targetList?.find(el => el.id === "34"));
const echartData = computed(() => mainStore.energyList?.filter(el => el.categoryType === "3"));
const title = computed(() => mainStore.minHeaderTitles?.find(el => el.type === 16)?.title ?? "");
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
                text: "园区能源消费分布",
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
                icon: "circle",
                data: legendData?.map(el => el.name),
                left: "left",
                textStyle: {
                    color: "#52A1DB",
                    fontSize: 20 * 3,
                    padding: [0, 103 * 3, 30, 10 * 2],
                },
                itemGap: 100,
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
                    top: "34%",
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        color: "#3ED5DF",
                        fontSize: 32 * 3,
                    },
                },
                {
                    text: percent + "%",
                    top: "43%",
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        color: "#3ED5DF",
                        fontSize: 80 * 3,
                        fontWeight: "bolder",
                    },
                },
                {
                    text: legendData[index].value,
                    top: "59%",
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        color: "#3ED5DF",
                        fontSize: 32 * 3,
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
    <div class="center-box-right">
        <div class="card-ratio">
            <LinkRatio :data="lineRatioData" type="right" width="0" />
        </div>

        <div class="constitute">
<!--          <TitleCard :title="title" subText="（单位：吨标煤）" />-->
          <TitleCard :title="title" />
        </div>

        <charts class="card-echarts" height="1800" :options="state.option" />
    </div>
</template>

<style scoped lang="less">
@import "../../../../global.less";
.center-box-right {
    padding: 0 0 0 calc(60px * @measureSize);
    .icon {
        width: 0;
    }
}
.card-ratio {
    display: flex;
    margin-top: calc(76px * @measureSize);
}
.constitute {
    margin-top: calc(86px * @measureSize);
}
.card-echarts {
    margin-top: calc(67px * @measureSize);
}
</style>
