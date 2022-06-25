<script setup>
import { useMainStore } from "@/store";
import { computed } from "vue";

const mainStore = useMainStore();

const data = computed(() => {
    let color = ["#49B7F4", "#33E966", "#F88838", "#BEED03"];
    return mainStore.targetList
        ?.filter(el => el.type == 2)
        ?.map((el, index) => {
            el.icon = require(`@/assets/images/group${index + 1}.png`);
            el.color = color[index];
            return el;
        });
});

const dataImages = [
    require("@/assets/images/1.gif"),
    require("@/assets/images/2.gif"),
    require("@/assets/images/3.gif"),
    require("@/assets/images/4.gif"),
    require("@/assets/images/5.gif"),
];
</script>

<template>
    <div>
        <div class="top-indicators-container">
            <div class="top-indicators-item" v-for="(item, index) in data" :key="index">
                <div class="icon-box">
                    <img :src="item.icon" alt="" />
                </div>
                <div class="detail-wrap">
                    <div class="detail-target" :style="{ color: item.color }">
                        {{ item.target }}<span class="detail-unit">{{ item.unit }}</span>
                    </div>
                    <div class="detail-name">{{ item.customer }}</div>
                </div>
            </div>
        </div>

        <div class="item_imags">
            <div v-for="(item, index) in dataImages" :key="index" :style="{ backgroundImage: `url(${item})` }" :class="`item_imag${index + 1}`"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
@import "./index.less";
.top-indicators-container {
    width: calc(1447px * @measureSize);
    height: calc(148px * @measureSize);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: url("../../../../assets/images/p1-center-top-bg.png") left bottom no-repeat;
    animation: 1000ms ease 1000ms 1 normal both running fadeIn;
    padding: 0 calc(40px * @measureSize);
    .top-indicators-item {
        display: flex;
        align-items: center;
        &:last-child {
            margin-right: 0;
        }

        .icon-box {
            flex-shrink: 0;
            margin-right: calc(15px * @measureSize);
            width: calc(120px * @measureSize);
            height: calc(120px * @measureSize);
            animation: 1000ms ease 2200ms 1 normal both running fadeIn;

            img {
                width: 100%;
            }
        }

        .detail-wrap {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;

            .detail-target {
                font-weight: bold;
                font-size: calc(50px * @measureSize);
                line-height: normal;
                text-align: left;
                animation: 1000ms ease 2000ms 1 normal both running fadeInDown;
                //margin-bottom: calc(13px * @measureSize);

                .detail-unit {
                    color: #1ac9ff;
                    font-weight: bold;
                    font-size: calc(20px * @measureSize);
                    line-height: normal;
                    text-align: left;
                    margin-left: calc(10px * @measureSize);
                }
            }

            .detail-name {
                color: #6fb6f9;
                font-weight: regular;
                font-size: calc(24px * @measureSize);
                line-height: normal;
                text-align: left;
                animation: 1000ms ease 2000ms 1 normal both running fadeInLeft;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}

.item_imags {
    display: flex;
    width: max-content;
    margin: calc(100px * @measureSize) auto 0;
    background: url("../../../../assets/images/bg.png") left bottom no-repeat;
    background-position-x: 29px;
    transform: scale(1.1);
}

.item_imag1 {
    width: 1344px;
    height: 1875px;
}
.item_imag2 {
    width: 1217px;
    height: 1875px;
}
.item_imag3 {
    width: 1967px;
    height: 1875px;
}
.item_imag4 {
    width: 1160px;
    height: 1875px;
}
.item_imag5 {
    width: 1335px;
    height: 1875px;
}
</style>
