<template>
  <div class="right-container">
    <name-card :name="state.name" class="name-container"/>
    <charts :options="state.option" height="1800"/>
  </div>

</template>

<script setup>
import Charts from '@/components/charts';
import {reactive} from 'vue';
import NameCard from "@/pages/carbonEmissionManagement/components/carbonAnalysis/NameCard";
const state = reactive({
  name: '中大型企业',
  option: {
    tooltip: {
      trigger: 'item',
      show: false
    },
    color: ['#49D323', '#2781EB', '#69F6FF', '#FB6815'],
    legend: {
      top: '0',
      left: 'left',
      padding: 132,
      icon: 'roundRect',
      itemWidth: 60,
      itemHeight: 60,
      itemGap: 78,
      borderRadius: 0,
      textStyle: {
        fontSize: 48,
        color: '#52A1DB',
        padding: [0, 0, 0, 32]
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['25%', '45%'],
        center: ['50%', '70%'],
        avoidLabelOverlap: false,
        roseType: 'radius',
        label: {
          show: true,
          position: 'center',
          formatter: `{d}%\n{b}`,
          fontSize: 48,
          color: '#4DFFFF',
          // rich: {
          //   d: {
          //     fontSize: '120px',
          //     marginBottom: '40px',
          //   }
          // }
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search'},
          { value: 735, name: 'Direct', },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
        ]
      }
    ]
  }
})
</script>

<style scoped lang="less">
@import "../../../../../global";

.right-container{
  width: calc(553px * @measureSize);
  height: 100%;
  border: 1px solid green;
  position: relative;

  .name-container{
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(106px * @measureSize);
  }
}

</style>