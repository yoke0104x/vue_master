<template>
  <div class="container">
    <div class="title-wrap" />
    <div class="title">
      <img src="@/assets/images/title.png" alt="" style="width: 100%; height: 100%" />
    </div>
    <div class="title-name">
      <p>经济运行概览</p>
    </div>
    <div class="content-bg"/>

<!--    轮播页码-->
    <PageNation/>

<!--    content-->
    <slot/>
    <div class="title-date">{{titleDate}}</div>
  </div>
</template>

<script>
import { playAnimation } from '@/utils';
import moment from 'moment';
import PageNation from "@/components/pageNation";
export default {
  name: "Layout",
  data(){
    return({
      titleDate: moment().format('YYYY年MM月DD日 HH:mm:ss'),
      time:null
    })
  },
  mounted(){
    this.$nextTick(() => {
      // title 背景
      playAnimation(".title-wrap", [
        { type: "fadeInDown", name: "向下移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);

      // title
      playAnimation(".title", [
        { type: "flipInY", name: "翻转进入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);

      //name
      playAnimation(".title-name", [
        { type: "fadeInUp", name: "向上移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);

      //日期
      playAnimation(".title-date", [
        { type: "fadeIn", name: "淡入", delayed: 0, loop: false, frequency: 1, duration: 10, isPlayer: false, isDisabled: false },
      ]);

      //主背景（切斜部分）
      playAnimation(".content-bg", [
        { type: "bounceInRight", name: "向左弹入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false },
      ]);

      // 时间更新
      this.time = setInterval(()=>{
        this.titleDate = moment().format('YYYY年MM月DD日 HH:mm:ss');
      },1000)
    })
  },
  components: {
    PageNation,
  },
  unmounted() {
    clearInterval(this.time);
  }
}
</script>

<style scoped lang="less">
@import "./index.less";

</style>