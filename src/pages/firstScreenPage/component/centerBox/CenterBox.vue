<template>
  <div class="center-box">
    <TopIndicators/>
    <div class="center-box-content">
      <MainEconomicIndicators/>
      <div style="flex: 1">
        <Map/>
      </div>
      <MainTargetIndicators/>
    </div>
  </div>
</template>

<script>
import TopIndicators from "@/pages/firstScreenPage/component/centerBox/TopIndicators";
import MainEconomicIndicators from "@/pages/firstScreenPage/component/centerBox/MainEconomicIndicators";
import MainTargetIndicators from "@/pages/firstScreenPage/component/centerBox/MainTargetIndicators";
import Map from "@/pages/firstScreenPage/component/centerBox/Map";
export default {
  name: "CenterBox",
  components: {Map, MainTargetIndicators, TopIndicators, MainEconomicIndicators}
}
</script>

<style scoped lang="less">
@import "index.less";

</style>