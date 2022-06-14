<template>
  <div class="center-container"></div>
</template>

<script>
import { playAnimation } from '@/utils';

export default {
  name: "ContentCenter",
  mounted(){
    this.$nextTick(() => {
      playAnimation("center-container", [
        { type: "flash", name: "闪烁", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
    })
  }
}
</script>

<style scoped lang="less">
@import "./index.less";


</style>