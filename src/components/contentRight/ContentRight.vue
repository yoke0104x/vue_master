<template>
  <div class="right-box-container">
    <slot/>
  </div>
</template>

<script>
import {playAnimation} from "@/utils";

export default {
  name: "ContentRight",
  mounted() {
    this.$nextTick(() => {
      playAnimation(".right-box-container", [
        { type: "fadeIn", name: "淡入", delayed: 0.5, loop: false, frequency: 1, duration: 0.5, isPlayer: false, isDisabled: false },
      ]);
    })
  }
}
</script>

<style scoped lang="less">
@import "index.less";

</style>