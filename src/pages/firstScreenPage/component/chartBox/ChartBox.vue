<template>
    <div class="chart-box">
      <div v-if="chartsTaskInfo?.loading">loading...</div>
      <div v-else class="chart-card" v-for="(item, index) in chartsInfo.list" :key="index">
        <ChartsCard :chartInfo="item" :chartData="chartsTaskInfo?.data?.[chartsInfo.taskIndex[index]]" />
      </div>
    </div>
</template>

<script>
import ChartsCard from "@/pages/firstScreenPage/component/chartBox/chartsCard/ChartsCard";
import {useFirstPageStore} from "@/store";
import {mapState} from "pinia";

export default {
  name: "LeftBox",
  components: {ChartsCard},
  props: ['chartsInfo'],
  computed: {
  ...mapState(useFirstPageStore, ['chartsTaskInfo'])
  },
  mounted() {

  },
}
</script>

<style scoped lang="less">
@import "index.less";

</style>