<template>
  <content-left>
    <ChartBox :chartsInfo="leftChartsInfo"/>
  </content-left>

  <content-center>
    <CenterBox/>
  </content-center>

  <content-right>
    <ChartBox :chartsInfo="rightChartsInfo"/>
  </content-right>

</template>

<script>
import ChartBox from "@/pages/firstScreenPage/component/chartBox/ChartBox";
import CenterBox from "@/pages/firstScreenPage/component/centerBox/CenterBox";
import {useFirstPageStore} from "@/store";
import {getEconomic1, getEconomic2, getTargetData} from "@/api";
import {CHARTS_TYPE, SUCCESENUM} from "@/constants";
import {mapActions} from "pinia";

export default {
  name: "FirstScreenPage",
  components: {
    CenterBox,
    ChartBox,
  },
  data(){
    return ({
      leftChartsInfo: {
        list: new Array(4).fill({type: CHARTS_TYPE.BAR}),
        taskIndex: [0, 1, 2, 3]
      },
      rightChartsInfo: {
        list: new Array(3).fill({type: CHARTS_TYPE.BAR}).concat([{type: CHARTS_TYPE.LINE}]),
        taskIndex: [4, 5, 6, 7]
      }
    })
  },
  methods: {
    ...mapActions(useFirstPageStore,
        ['insetBarAndLinesDataAction', 'insetTopIndicatorsTaskAction', 'insetMapTaskAction']
    )
  },
  mounted() {

    //左右两边echarts图表数据
    getEconomic2().then(res => {
      if(res?.msg === SUCCESENUM){
        this.insetBarAndLinesDataAction(res)
      }
    })

    //地图上方统计数据list
    getTargetData().then(res => {
      if(res?.msg === SUCCESENUM){
          this.insetTopIndicatorsTaskAction(res)
      }
    })

    //地图数据
    getEconomic1().then(res => {
      if(res?.msg === SUCCESENUM){
        this.insetMapTaskAction(res)
      }
    })
  }
}
</script>

<style scoped>

</style>