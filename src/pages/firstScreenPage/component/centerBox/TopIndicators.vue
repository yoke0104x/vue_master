<template>
  <div class="top-indicators-container">
    <div class="top-indicators-item" v-for="(item, index) in list" :key="index">
      <div class="icon-box">
        <img :src="item.icon" alt=""/>
      </div>
      <div class="detail-wrap">
        <div class="detail-target" :style="{color: item.color}">{{topIndicatorsTaskInfo.data?.[index]?.target}}<span class="detail-unit">{{topIndicatorsTaskInfo.data?.[index]?.unit}}</span></div>
        <div class="detail-name">{{topIndicatorsTaskInfo.data?.[index]?.customer}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useFirstPageStore} from "@/store";

export default {
  name: "TopIndicators",
  data(){
    return({
        list: [
          {
            icon: require('@/assets/images/p1-center-icon-1.png'),
            color: '#43E086',
            customer: '工业生产总值',
            target: 784,
            unit: '亿元 +',
          },
          {
            icon: require('@/assets/images/p1-center-icon-2.png'),
            color: '#FFCB4D',
            customer: '工业生产总值',
            target: 784,
            unit: '亿元 +'
          },
          {
            icon: require('@/assets/images/p1-center-icon-3.png'),
            color: '#4ED8F6',
            customer: '工业生产总值',
            target: 784,
            unit: '亿元 +'
          },
          {
            icon: require('@/assets/images/p1-center-icon-4.png'),
            color: '#5AD0C5',
            customer: '工业生产总值',
            target: 784,
            unit: '亿元 +'
          }
        ]
    })
  },
  computed: {
    ...mapState(useFirstPageStore, ['topIndicatorsTaskInfo'])
  },
  // methods: {
  //   formatTask: function (){
  //     const taskData = this.topIndicatorsTaskInfo?.data || [];
  //     this.list = this.list.map((item, index) => Object.assign(item, ...taskData[index]))
  //   }
  // },
}
</script>

<style scoped lang="less">
@import "../../../../global.less";
  .top-indicators-container{
    width: calc(1447px * @measureSize);
    height: calc(148px * @measureSize);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: url("../../../../assets/images/p1-center-top-bg.png") left bottom no-repeat;
    animation: 1000ms ease 1000ms 1 normal both running fadeIn;

    .top-indicators-item{
      display: flex;
      align-items: center;
      margin-right: calc(15px * @measureSize);

      .icon-box{
        margin-right: calc(15px * @measureSize);
        width: calc(136px * @measureSize);
        height: calc(106px * @measureSize);
        animation: 1000ms ease 2200ms 1 normal both running fadeIn;


        img{
          width: 100%;
        }
      }

      .detail-wrap{
        display: flex;
        flex-direction: column;

        .detail-target{
          font-weight: bold;
          font-size: calc(50px * @measureSize);
          line-height: normal;
          text-align: left;
          animation: 1000ms ease 2000ms 1 normal both running fadeInDown;
          //margin-bottom: calc(13px * @measureSize);

          .detail-unit{
            color: #1AC9FF;
            font-weight: bold;
            font-size: calc(20px * @measureSize);
            line-height: normal;
            text-align: left;
            margin-left: calc(10px * @measureSize);
          }
        }

        .detail-name{
          color: #6FB6F9;
          font-weight: regular;
          font-size: calc(24px * @measureSize);
          line-height: normal;
          text-align: left;
          animation: 1000ms ease 2000ms 1 normal both running fadeInLeft;
        }
      }
    }
  }

</style>