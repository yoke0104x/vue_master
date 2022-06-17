<template>
  <div class="name"><span class="triangle"/><span>{{title}}</span></div>
</template>

<script>
export default {
  name: "TitleCard",
  props: ['title']
}
</script>

<style scoped lang="less">
  @import "../../../../global.less";
  .name{
    color: #0096FF;
    font-size: calc(40px * @measureSize);
    line-height: normal;
    display: flex;
    align-items: center;
    animation: 1000ms ease 4500ms 1 normal both running fadeIn;

    .triangle {
      display: inline-block;
      border-style: solid;
      border-color: transparent;
      border-width: calc(17px * @measureSize) 0 calc(17px * @measureSize) calc(17px * @measureSize);
      border-left-color: #0096FF;
      margin-right: calc(23px * @measureSize);
    }
}

</style>