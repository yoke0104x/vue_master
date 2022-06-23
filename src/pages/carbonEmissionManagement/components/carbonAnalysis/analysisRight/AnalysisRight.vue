<template>
  <div class="right-container">
    <name-card :name="state.name" class="name-container"/>
    <charts v-if="props.detailInfo.list.length !== 0" :options="state.option" height="1800"/>
  </div>

</template>

<script setup>
import Charts from '@/components/charts';
import {defineProps, reactive, watch} from 'vue';
import { map, isEmpty } from 'lodash';
import NameCard from "@/pages/carbonEmissionManagement/components/carbonAnalysis/NameCard";


const props = defineProps({
  detailInfo: Object
})

const state = reactive({
  name: '',
  option: {},
  timer: null
})

const setOption = (list) =>{

  const colors = ['#49D323', '#2781EB', '#69F6FF', '#FB6815'];

  state.timer && clearInterval(state.timer);

  const getTitle = index => {
    let total = list?.map(el => el.value)?.reduce((a, b) => a * 1 + b * 1, 0);
    let percent = ((list[index]?.value / total) * 100).toFixed(2);
    return [
      {
        text: percent + "%",
        top: "58%",
        textAlign: "center",
        left: "50%",
        textStyle: {
          color: colors[index],
          fontSize: 55 * 3,
          fontWeight: 800,
        },
      },
      {
        text: list[index]?.name,
        top: "68%",
        textAlign: "center",
        left: "50%",
        textStyle: {
          color: colors[index],
          fontSize: 25 * 3,
        },
      },
    ];
  }

  const initialOption = {
    tooltip: {
      trigger: 'item',
      show: false
    },
    title: getTitle(0),
    color: colors,
    legend: {
      data: map(list, item => item.name),
      top: '0',
      left: 'left',
      padding: 132,
      icon: 'rect',
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
        name: 'carbon',
        type: 'pie',
        radius: [350, 500],
        center: ['50%', '65%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        roseType: 'radius',
        label: {
          show: false,
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
        data: list
      }
    ]
  }

  state.option = initialOption;

  let index = 0;
  let title = [];

  state.timer = setInterval(() => {
    if (index < list.length) {
      index++;
    } else {
      index = 0;
    }
    title = getTitle(index)
    state.option = {
      ...initialOption,
      title
    };
  }, 10000);
}

watch(() => props.detailInfo, val => {
  state.name = val.name;
  if(!isEmpty(val.list)){
    setOption(val.list);
  }
}, {immediate: true})

</script>

<style scoped lang="less">
@import "../../../../../global";

.right-container{
  width: calc(553px * @measureSize);
  height: 100%;
  position: relative;

  .name-container{
    width: 100%;
    position: absolute;
    left: 0;
    top: calc(96px * @measureSize);
  }
}

</style>