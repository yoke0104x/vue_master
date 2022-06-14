<template>
  <div class="pageNation-circle"/>
  <div class="pageNation-container"></div>
</template>

<script>
import { playAnimation } from '@/utils';

export default {
  name: "PageNation",
  mounted() {
    this.$nextTick(() => {
      playAnimation(".pageNation-circle", [
        { type: "fadeInUp", name: "向上移入", delayed: 3, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);

      playAnimation(".pageNation-container", [
        { type: "fadeInUp", name: "向上移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
    })
  }
}
</script>

<style scoped lang="less">
@import "./index.less";

</style>