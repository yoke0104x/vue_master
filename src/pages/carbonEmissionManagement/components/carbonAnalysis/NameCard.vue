<template>
  <div class="name-container">
    <span class="name">{{name}}</span>
  </div>

</template>

<script>
export default {
  name: "NameCard",
  props: ['name']
}
</script>

<style scoped lang="less">
@import "../../../../global";

.name-container{
  height: calc(62px * @measureSize);
  padding: 0 calc(15px * @measureSize);
  background: #124A8E;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .name{
    color: #4DFFFF;
    font-size: calc(24px * @measureSize);
    line-height: 1;
  }
}

</style>