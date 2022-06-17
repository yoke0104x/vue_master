<template>
  <div class="main-eco-container">
    <div class="title-wrap">
      <TitleCard :title="name"/>
    </div>
    <div class="main-eco-list">
      <div
          class="main-eco-list-item"
          v-for="(item, index) in mapTaskData.list"
          :key="index"
      >
        <div class="main-eco-item-target">{{item.indicatorsValue}}</div>
        <div class="main-eco-item-desc">
          {{`${item.customer}${item.target}`}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useFirstPageStore} from "@/store";
import TitleCard from "@/pages/firstScreenPage/component/centerBox/TitleCard";

export default {
  name: "MainEconomicIndicators",
  components: {TitleCard},
  data(){
    return({
      name: '2021年主要经济指标',
    })
  },
  computed: {
    ...mapState(useFirstPageStore, ['mapTaskData'])
  }
}
</script>

<style scoped lang="less">
@import "../../../../global.less";
  .main-eco-container{
    width: calc(587px * @measureSize);
    height: 100%;
    padding-top: calc(28px * @measureSize);
    padding-bottom: calc(100px * @measureSize);
    overflow: hidden;

    .title-wrap{
      padding-left: calc(10px * @measureSize);
      margin-bottom: calc(28px * @measureSize);
    }

    .main-eco-list{
      height: calc(100% - calc(70px * @measureSize));
      overflow: auto;
      &::-webkit-scrollbar{
        display: none;
      }
      .main-eco-list-item{
        height: calc(113px * @measureSize);
        background: url("../../../../assets/images/main-eco-item.png") no-repeat;
        background-size: contain;
        padding-left: calc(116px * @measureSize);
        padding-right: calc(126px * @measureSize);
        padding-bottom: calc(11px * @measureSize);
        margin-bottom: calc(26px * @measureSize);
        display: flex;
        align-items: center;
        animation: 1000ms ease 3900ms 1 normal both running fadeInDown;


        .main-eco-item-target{
          color: #44F3FE;
          font-size: calc(36px * @measureSize);
          line-height: normal;
          text-align: left;
          margin-right: calc(17px * @measureSize);
          min-width: calc(102px * @measureSize);
          white-space: nowrap;
          animation: 1000ms ease 5600ms 1 normal both running bounceInLeft;
        }

        .main-eco-item-desc{
          color: #FFCB4D;
          font-size: calc(16px * @measureSize);
          line-height: 2;
          text-align: center;
          width: calc(220px * @measureSize);
          padding: calc(18px * @measureSize) 0;
          height: 100%;
          display: flex;
          align-items: center;
          animation: 1000ms ease 4400ms 1 normal both running bounceInRight;
        }
      }
    }
  }

</style>