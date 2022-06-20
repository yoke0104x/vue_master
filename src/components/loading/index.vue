<template>
  <div class='loading-content' v-if="loading"><div class="meetup"><div></div><div></div><div></div><div></div></div></div>
  <slot v-else/>
</template>

<script>
export default {
  props: ['loading']
};
</script>

<style scoped lang="less">
@import "./index.less";
.load-img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>