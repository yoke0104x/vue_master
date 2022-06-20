<script setup>
import LinkRatio from "@/components/LinkRatio";
import TitleCard from "@/components/TitleCard";
const data = {
    id: "33",
    customer: "综合能源消费总量",
    target: "695963",
    unit: "吨标准煤",
    increase: "16.6%",
    type: "4",
};
</script>

<template>
    <div class="center-box-left">
        <div class="card-ratio">
            <LinkRatio :data="data" />
        </div>

        <div class="constitute">
            <TitleCard title="终端能耗构成" />
        </div>

        <div class="chart" ref="comPositionRef"></div>
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
.center-box-left {
    border: 1px solid yellow;
    height: 100%;
}
.card-ratio {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(76px * @measureSize);
}
.constitute{
  margin-top: calc(86px * @measureSize);
  display: flex;
  justify-content: center;
}
</style>
