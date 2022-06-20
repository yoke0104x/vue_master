<template>
  <div id="bar-chart-container" ref="chart-view"/>
</template>

<script>
import * as echarts from 'echarts';

// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint
    const c0 = [shape.x + 17, shape.y]
    const c1 = [shape.x - 23, shape.y]
    const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13 + 13]
    const c3 = [xAxisPoint[0] + 17, xAxisPoint[1]]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [shape.x + 17, shape.y]
    const c2 = [xAxisPoint[0] + 17, xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + 35, xAxisPoint[1] - 15]
    const c4 = [shape.x + 35, shape.y - 15]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x + 17, shape.y]
    const c2 = [shape.x + 35, shape.y - 15] //右点
    const c3 = [shape.x, shape.y - 15]
    const c4 = [shape.x - 23, shape.y]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

let defaultColors = ['#1BC9F1', "#1C7084", "#06728A"];

function getColor(a = 1) {
  return `rgba(16,213,223,${a})`
}


const getOption = ({colors, xAxisValueList, yAxisValueList}) =>(
    {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params, ticket, callback) {
          return "";
        }
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
        data: xAxisValueList,
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
        type: 'custom',
        renderItem: (params, api) => {
          const location = api.coord([api.value(0), api.value(1)]);
          return {
            type: 'group',
            children: [{
              type: 'CubeLeft',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[params.dataIndex][0]
                },
                  {
                    offset: 1,
                    color: colors[params.dataIndex][1]
                  }
                ])
              }
            }, {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[params.dataIndex][1]
                },
                  {
                    offset: 1,
                    color: colors[params.dataIndex][0]
                  }
                ])
              }
            }, {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0])
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[params.dataIndex][2]
                },
                  {
                    offset: 1,
                    color: colors[params.dataIndex][2]
                  }
                ])
              }
            }]
          }
        },
        data: yAxisValueList
      }, {
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize: 20,
            color: getColor(1),
            offset: [10, -25]
          }
        },
        itemStyle: {
          color: 'transparent'
        },
        tooltip: {

        },
        data: yAxisValueList
      }]
    }
)

export default {
  data(){
    return{
      timer: null
    }
  },
  props: ['data'],
  mounted(){
    const chartDom = this.$refs["chart-view"];
    const myChart = echarts.init(chartDom);
    const data = this.data;
    const xAxisValueList = data?.eivs?.filter(el => el.year >= data?.startYear)?.map(el => el.year);
    const yAxisValueList = data?.eivs?.filter(el => el.year >= data?.startYear)?.map(el => el.value * 1);

    let colors = new Array(5).fill(defaultColors)
    const option = getOption({colors, xAxisValueList, yAxisValueList})
    myChart.setOption(option);

    let color = ["red", "#fff", "red"];
    this.timer = setInterval(() => {
      let index = Math.floor(Math.random() * 5 + 0);
      colors = colors.map((el, i) => {
        if (i === index) {
          return color
        }
        return [...defaultColors]
      })

      const newOption = getOption({colors, xAxisValueList, yAxisValueList});
      myChart.setOption(newOption);

      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: index
      });
    }, 10000)
  },
  unmounted(){
    this.timer && clearInterval(this.timer)
  }
}

</script>

<style scoped>
  #bar-chart-container{
    height: 80%;
    width: 100%;
  }
</style>