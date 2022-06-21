<template>
    <Loading :loading="props.loading">
      <div class="chart-box">
        <div class="chart-card" v-for="(item, index) in props.list" :key="index">
          <ChartsCard :chartInfo="item"/>
        </div>
      </div>
    </Loading>
</template>

<script setup>
  import ChartsCard from "@/pages/firstScreenPage/component/chartBox/chartsCard/ChartsCard";
  const props = defineProps({
    loading: {
      type: Boolean,
      default: () => true
    },
    list: {
      type: Array,
      default: () => []
    }
  })
</script>

<style scoped lang="less">
@import "index.less";

</style>