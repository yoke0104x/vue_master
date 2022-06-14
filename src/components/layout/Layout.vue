<template>
  <div class="container">
    <div class="title-wrap">
    </div>
    <div class="title">
      <img src="@/assets/images/title.png" alt="" style="width: 100%; height: 100%" />
    </div>
    <div class="title-name">
      <p>经济运行概览</p>
    </div>
    <div class="title-date">{{titleDate}}</div>
  </div>
</template>

<script>
import { playAnimation } from '@/utils';
import moment from 'moment';
export default {
  name: "Layout",
  data(){
    return({
      titleDate: moment().format('YYYY年MM月DD日 HH:mm:ss')
    })
  },
  mounted(){
    this.$nextTick(() => {
      playAnimation(".title-wrap", [
        { type: "fadeInDown", name: "向下移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
      playAnimation(".title", [
        { type: "flipInY", name: "翻转进入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
      playAnimation(".title-name", [
        { type: "fadeInUp", name: "向上移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
      playAnimation(".title-date", [
        { type: "fadeIn", name: "淡入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);
    })
  },
}
</script>

<style scoped lang="less">
@import "./styles.less";

</style>