<script setup>
import titleTarget from "@/components/titleTarget";
import energyConsumptionDisplay from "./energyConsumptionDisplay";
import { useMainStore } from "@/store";
import { computed } from "vue";
const useStore = useMainStore();

// 获取新能源装机总量 和 清洁能源占比 的数据
const data = computed(() => {
    return useStore.targetList
        ?.filter(el => {
            return el.id === "35" || el.id === "36";
        })
        ?.map(el => {
            if (el.id === "35") {
                el.color = "#12FFE0";
                el.icon = require("@/assets/images/target35.webp");
            }

            if (el.id === "36") {
                el.color = "#1CE580";
                el.icon = require("@/assets/images/target36.webp");
            }

            return el;
        });
});
</script>

<template>
    <div>
        <titleTarget :data="data" />
        <div class="title">园区能耗综合展示（tce）</div>
        <div>
            <energyConsumptionDisplay />
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
.title {
    width: calc(676px * @measureSize);
    height: calc(76px * @measureSize);
    background: url("../../../../assets/images/p1-map-title-bg.png") no-repeat;
    background-size: contain;
    margin: calc(46px * @measureSize) auto calc(51px * @measureSize);
    text-align: center;
    color: #19c0f6;
    font-weight: bold;
    font-size: calc(40px * @measureSize);
    line-height: calc(76px * @measureSize);
}
</style>
