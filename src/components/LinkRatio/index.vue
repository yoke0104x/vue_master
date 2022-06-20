<script setup>
import { ElProgress, ElIcon } from "element-plus";
import { Top, Bottom } from "@element-plus/icons-vue";
import { computed } from "vue";

const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            customer: "",
            unit: "",
            target: 0,
            increase: "",
        }),
    },
    type: {
        type: String,
        default: "left",
    },
    // 值的颜色、环比的颜色
    colors: {
        type: String,
        default: ["#CEE618", "#FEDB65"],
    },
});

// 计算进度条的百分比
const increase = computed(() => props.data.increase.replace("%", "") * 1);

// 字体的颜色
const color = computed(() => {
    return props.colors?.[1];
});
// 修改进度条背景颜色
document.querySelector(":root").style.setProperty("--el-fill-color-light", "#000");
</script>

<template>
    <div class="main" :class="props?.type === 'left' ? 'left' : 'right'">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="content">
            <div class="header">
                <span class="title">{{ props?.data?.customer }}</span>
                <span class="unit">{{ props?.data?.unit }}</span>
            </div>
            <div class="value" :style="{ color: props.colors[0] }">
                {{ props?.data?.target }}
            </div>
        </div>
        <div class="link-ratio">
            <el-progress type="circle" :color="colors?.[1]" stroke-width="20" :percentage="Math.floor(Math.abs(increase))" width="272">
                <template v-slot="data">
                    <div class="icon-font">
                        <el-icon v-if="increase >= 1"><Top /></el-icon>
                        <el-icon v-else-if="increase < 0"><Bottom /></el-icon>
                        <el-icon v-else-if="increase === 0"></el-icon>
                    </div>
                    <div class="progress-title">
                        <span class="percentage">{{ data.percentage ? data.percentage + "%" : 0 }}</span>
                    </div>
                    <div class="progress-text">环比</div>
                </template>
            </el-progress>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "../../global.less";
.main {
    width: calc(600px * @measureSize);
    height: calc(140px * @measureSize);
    display: flex;
    background: url("../../assets/images/ratioleftbg.png") no-repeat;
    align-items: center;
    padding: 0 calc(10px * @measureSize) 0 0;
    animation: 2s ease 2s 1 normal both running bounceInRight;
}
.left {
}

.right {
    flex-direction: row-reverse;
    background: url("../../assets/images/ratiorightbg.png") no-repeat;
    padding: 0 0 0 calc(10px * @measureSize);

    .content {
        margin-left: calc(10px * @measureSize);
    }
}
.link-ratio {
    width: calc(120px * @measureSize);
    height: calc(120px * @measureSize);
    animation: 2s ease 3s 1 normal both running bounceInRight;
}

.icon {
    width: calc(114px * @measureSize);
    height: calc(114px * @measureSize);
}
.link-ratio {
    background: url("../../assets/images/linkratio.webp") no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    flex: 1;

    .title {
        color: #6fb6f9;
        font-size: calc(32px * @measureSize);
        animation: 2s ease 3s 1 normal both running bounceInLeft;
    }
    .unit {
        color: #1ac9ff;
        font-size: calc(16px * @measureSize);
        margin-left: calc(23px * @measureSize);
        animation: 2s ease 3s 1 normal both running bounceInRight;
    }
}

.value {
    font-weight: bold;
    font-size: calc(45px * @measureSize);
    text-align: center;
    animation: 2s ease 4s 1 normal both running bounceInLeft;
}

.el-progress--circle {
    width: calc(90px * @measureSize) !important;
}
.progress-title {
    font-size: calc(18px * @measureSize);
    color: v-bind(color);
}
.icon-font .el-icon {
    font-size: calc(20px * @measureSize);
    color: v-bind(color);
}
.progress-text {
    font-size: calc(14px * @measureSize);
    color: #6fb6f9;
    margin-top: calc(5px * @measureSize);
}
</style>
