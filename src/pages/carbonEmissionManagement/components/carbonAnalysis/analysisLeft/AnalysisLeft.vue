<script setup>
import NameCard from "../NameCard";
import DetailCard from "@/pages/carbonEmissionManagement/components/carbonAnalysis/analysisLeft/DetailCard";

</script>


<template>
  <div class="left-container">
    <div class="tag-wrap">
      <div class="tag">大型企业</div>
    </div>

    <div class="name-wrap">
      <name-card name="国机重型装备集团股份有限公司"/>
    </div>

    <detail-card/>
    <detail-card/>
    <detail-card/>
    <detail-card/>


  </div>

</template>


<style scoped lang="less">
@import "../../../../../global";

.left-container{
  width: calc(553px * @measureSize);
  height: 100%;
  border: 1px solid red;

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
    }
  }

  .name-wrap{
    margin-bottom: calc(54px * @measureSize);
  }
}

</style>