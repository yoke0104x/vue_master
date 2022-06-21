<template>
  <div class="name-box">{{name}}</div>
</template>

<script>
export default {
  name: "SecondTitle",
  props: ['name']
}
</script>

<style scoped lang="less">
@import "../../global.less";
  .name-box{
    width: calc(675px * @measureSize);
    height: calc(76px * @measureSize);
    color: #19C0F6;
    font-family: jed;
    font-weight: bold;
    font-size: calc(40px * @measureSize);
    line-height: 2;
    letter-spacing: calc(4px * @measureSize);
    text-align: center;
    background: url("../../assets/images/p1-map-title-bg.png") no-repeat;
    background-size: contain;
    animation: 1000ms ease 4000ms 1 normal both running fadeInDown;
  }
</style>