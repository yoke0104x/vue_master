<script setup>
import { useMainStore } from "@/store";
import { computed } from "vue";
const useStore = useMainStore();

// 获取能耗综合展示数据
const data = computed(() => {
    let energy = ["电力", "天燃气", "煤炭", "其他"];
    let energyData = useStore?.energyList?.filter(el => el.categoryType == 1);
    let data1 = energyData?.map((el, index) => {
        if (el.categoryType == 1) {
            let find = energyData?.find(els => els.category == energy[index]);
            return {
                title: energy[index],
                value: find?.energyConsumption,
                unit: find?.unit,
            };
        }
    });
  return data1;
});

</script>

<template>
    <div class="energy-container">
        <div class="energy-container-item" :class="'item' + index" v-for="(item, index) in data" :key="index">
            <div class="img" :class="'image-energy-' + index"></div>
            <div>
                <div class="title-customer">
                    {{ item.title }}
                </div>
                <div class="energy-target">
                    {{ item.value }}
                </div>
                <div class="energy-unit">
                    {{ item.unit }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "../../../../global.less";
@import "./index.less";
.energy-container {
    width: calc(1100px * @measureSize);
    height: calc(570px * @measureSize);
    background: url("../../../../assets/images/groupbg.webp") no-repeat;
    display: flex;
    padding: 0 calc(75px * @measureSize);

    .energy-container-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        //justify-content: center;
    }

    .img {
        width: 384px;
        height: 336px;
        margin: 0 auto;
        transform: scale(1.5);
        margin-top: calc(120px * @measureSize);
    }
    .title-customer {
        margin: calc(60px * @measureSize) auto calc(32px * @measureSize);
        color: #00fff4;
        background: url("../../../../assets/images/border03.webp") left bottom no-repeat;
        width: calc(190px * @measureSize);
        height: calc(55px * @measureSize);
        text-align: center;
        font-size: calc(24px * @measureSize);
        line-height: calc(55px * @measureSize);
    }

    .energy-target {
        font-size: calc(34px * @measureSize);
        text-align: center;
    }

    .energy-unit {
        color: #fff;
        font-size: calc(26px * @measureSize);
        margin-top: calc(20px * @measureSize);
        text-align: center;
    }
    .item0 {
        .energy-target {
            color: #f6bd16;
        }
    }
    .item1 {
        .energy-target {
            color: #05d3a5;
        }
    }
    .item2 {
        .energy-target {
            color: #73bae8;
        }
    }
    .item3 {
        .energy-target {
            color: #33bafd;
        }
    }
}
</style>
