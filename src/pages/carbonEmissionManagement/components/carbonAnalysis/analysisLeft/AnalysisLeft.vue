<script setup>
import NameCard from "../NameCard";
import DetailCard from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisLeft/DetailCard";
import { defineProps } from 'vue';

const props = defineProps({
  detailInfo: Object
})


</script>


<template>
  <div class="left-container">
    <div class="tag-wrap">
      <div class="tag">{{props.detailInfo.tag}}</div>
    </div>

    <div class="name-wrap">
      <name-card :name="props.detailInfo.name"/>
    </div>

    <detail-card
        v-for="(item, index) in props.detailInfo.list"
        :key="index"
        v-bind="item"
    />

  </div>

</template>


<style scoped lang="less">
@import "../../../../../global";

.left-container{
  width: calc(553px * @measureSize);
  height: 100%;

  .tag-wrap{
    display: flex;
    justify-content: flex-end;
    padding: calc(26px * @measureSize) calc(33px * @measureSize);

    .tag{
      width: calc(164px * @measureSize);
      height: calc(44px * @measureSize);
      font-size: calc(20px * @measureSize);
      text-align: center;
      line-height: calc(44px * @measureSize);
      color: #14FF00;
      border: 1px solid #14FF00;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .name-wrap{
    margin-bottom: calc(54px * @measureSize);
  }
}

</style>