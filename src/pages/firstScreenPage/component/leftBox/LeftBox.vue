<template>
    <div class="left-box">
      <div v-if="loading">loading...</div>
      <div v-else class="chart-card" v-for="(item, index) in list">
        <ChartsCard :chartInfo="item" :chartData="data[index]" />
      </div>
    </div>
</template>

<script>
import ChartsCard from "@/pages/firstScreenPage/component/chartsCard/ChartsCard";
import {getEconomic2} from "@/api";
import {SUCCESENUM} from "@/constants";

export default {
  name: "LeftBox",
  components: {ChartsCard},
  data(){
    return({
      loading: true,
      list: [
        {
          title: "工业总产值(亿元)",
          dataPromise: "",
          type: "bar"
        },
        {
          title: "全社会固定资产投资(亿元)",
          dataPromise: "",
          type: "bar"
        },
        {
          title: "一般公共预算收入(亿元)",
          dataPromise: "",
          type: "bar"
        },
        {
          title: "社会消费品零售总额(亿元)",
          dataPromise: "",
          type: "bar"
        }
      ],
      data: []
    })
  },
  mounted() {
    getEconomic2().then(res => {
      if(res?.msg === SUCCESENUM){
        this.data = res?.data || [];
        this.loading = false;
      }
    })
  },
  updated(){
    console.log('=========uL:', this.data, this.loading)
  }
}
</script>

<style scoped lang="less">
@import "index.less";

</style>