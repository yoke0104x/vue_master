<template>
  <div id="line-chart-container" ref="chart-view"/>
</template>

<script>
import * as echarts from "echarts";

function getColor(a = 1) {
  return `rgba(16,213,223,${a})`
}

const times = Array.from({ length: 5 }, (v, i) => i).map(v => v + 2017);

const data = {
  startYear: 0,
  eivs: [{year: 1, value: 2}, {year: 5, value: 8}, {year: 10, value: 13}, {year: 22, value: 44}, {year: 4, value: 99}]
}

const seriesData = data?.eivs?.filter(el => el.year >= data?.startYear)?.map(el => (
    {
      value: el.value,
      name: el.year,
      symbol: 'circle',
      symbolSize: 20,
      itemStyle: {
        color: "rgba(255,255,255,1)",
      },
    }
));

const defaultOption = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '0%',
    right: '0%',
    top: '5%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: times,
    axisLine: {
      show: true,
      lineStyle: {
        color: getColor(0.1),
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontSize: 24,
      color: getColor(1),
      padding: [1, 4, 5, 15]
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: getColor(0.1)
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColor(0.1),
        type: 'dashed'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 12,
      margin: 2,
      color: getColor(1),
    },
    boundaryGap: ['20%', '20%']
  },
  series: [{
    name: '1',
    type: 'line',
    lineStyle: {
      normal: {
        color: getColor(1), // 线条颜色
      },
      borderColor: '#f0f'
    },
    label: {
      show: true,
      position: 'top',
      color: getColor(1),
      fontSize: 20,
      offset: [0, -15,]
    },
    tooltip: {
      show: false
    },
    data: seriesData
  }]
};


export default {
  name: "LineChart",
  data(){
    return({
      timer: null
    })
  },
  mounted() {

    const chartDom = this.$refs["chart-view"];
    const myChart = echarts.init(chartDom);
    myChart.setOption(defaultOption);

    this.timer = setInterval(() => {
      let index = Math.floor(Math.random() * 5 + 0);
      let newOption = { ...defaultOption };
      newOption.series[0].data = seriesData?.map((el, i) => {
        if (i === index) {
          return {
            ...el,
            itemStyle: {
              color: "#7BD71E",
            },
          }
        }
        return {
          ...el,
          itemStyle: {
            color: "#fff",
          },
        }
      });
      myChart.setOption(newOption);
    }, 10000);
  },
  unmounted(){
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
  #line-chart-container{
    height: 80%;
    width: 100%;
  }

</style>