<script setup>
import composition from "./composition";
</script>

<template>
    <div class="energy-content">
        <div class="energy-content-item energy-content-left">
            <composition />
        </div>
        <div class="energy-content-c"></div>
        <div class="energy-content-item energy-content-right"></div>
    </div>
</template>

<style scoped lang="less">
@import "../../../../global.less";
.energy-content {
    height: 100%;
    width: 100%;
    padding: 0 calc(234px * @measureSize);
    display: flex;

    .energy-content-c {
        width: calc(1100px * @measureSize);
    }

    .energy-content-item {
        flex: 1;
    }
}
</style>
