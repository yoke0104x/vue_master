<template>
  <div class="detail-card-wrap">
    <div class="name-box">{{name}}</div>
    <div class="target-box" :style="getColorStyle()">{{value}}</div>
    <div class="unit-box" v-if="unit" :style="getColorStyle()">{{unit}}</div>
  </div>

</template>

<script>
export default {
  name: "DetailCard",
  props: ['name', 'value', 'unit', 'color'],
  methods: {
    getColorStyle(){
      return ({color: this.color})
    }
  }
}
</script>

<style scoped lang="less">
@import "../../../../../global";

.detail-card-wrap {
  margin-bottom: calc(44px * @measureSize);
  padding-left: calc(52px * @measureSize);
  padding-right: calc(36px * @measureSize);
  display: flex;
  justify-content: center;
  align-items: center;

  .name-box{
    width: calc(100px * @measureSize);
    color: #84C4FF;
    font-size: calc(20px * @measureSize);
    text-align: left;
    flex-shrink: 0;
  }

  .target-box{
    flex: 1;
    min-width: calc(150px * @measureSize);
    height: calc(50px * @measureSize);
    line-height: calc(50px * @measureSize);
    font-size: calc(28px * @measureSize);
    color: #04C3FF;
    text-align: center;
    border-radius: calc(23px * @measureSize);
    background: #0B3A74;
    margin-left: calc(36px * @measureSize);
    margin-right: calc(17px * @measureSize);
  }

  .unit-box{
    color: #FF4F04;
    font-size: calc(20px * @measureSize);
    text-align: left;
    flex-shrink: 0;
  }
}

</style>