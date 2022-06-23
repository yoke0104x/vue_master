<template>
  <div class="main-target">
    <div class="title-wrap">
      <TitleCard :title="titles?.[1]"/>
    </div>

    <div class="main-target-name">{{target}}</div>

<!--    <text-scroll :text="scrollText" :class="['min-target-scroll']"/>-->

    <div class="progress-wrap">
      <el-progress
          type="dashboard"
          :percentage="80"
          :width="981"
          :stroke-width="44"
          color="#05CD99"
      >
        <template #default="{ percentage }">
            <div class="percentage-label">社会消费零售品</div>
            <div class="percentage-value">{{ percentage }}%</div>
        </template>
      </el-progress>
    </div>

    <div class="min-target-scroll">{{scrollText}}</div>
    <div class="pie-bg">
    </div>


  </div>

</template>

<script>
import TitleCard from "@/pages/firstScreenPage/component/centerBox/TitleCard";
import TextScroll from "@/components/textScroll/TextScroll";
import { ElProgress } from 'element-plus'
import {mapState} from "pinia";
import {useFirstPageStore} from "@/store";

export default {
  name: "MainTargetIndicators",
  components: {TitleCard, ElProgress, TextScroll},
  data(){
    return({
      target: '保底890亿、力争突破900亿',
      scrollText: '力争保持全市第一力争保持全市第一梯队力争超过全市平均力争保持招商引资引领姿态'
    })
  },
  computed: {
    ...mapState(useFirstPageStore, [ 'titles'])
  }
}
</script>

<style scoped lang="less">
  @import "../../../../global.less";
  .main-target{
    width: calc(600px * @measureSize);
    height: 100%;
    padding-top: calc(57px * @measureSize);

    .title-wrap{
      margin-bottom: calc(60px * @measureSize);
      display: flex;
      justify-content: center;
    }

    .main-target-name{
      height: calc(60px * @measureSize);
      width: calc(485px * @measureSize);
      text-align: center;
      line-height: 1.2;
      font-weight: bold;
      font-size: calc(36px * @measureSize);
      background: url("../../../../assets/images/pi-center-main-target-bg.png") no-repeat;
      background-size: cover;
      color: #FDFF95;
      animation: 1000ms ease 3000ms 1 normal both running tada;
      margin: 0 auto calc(60px * @measureSize);
    }

    .progress-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: calc(45px * @measureSize);
      animation: 1000ms ease 5000ms 1 normal both running fadeIn;

      .el-progress{
        position: relative;
        background: url("../../../../assets/images/p1-progress_bg.png") no-repeat;
        background-size: cover;
        /deep/ .el-progress__text{
          position: absolute;
          top: 50%;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          //margin-top: calc(50% - 200px);
        }
      }

      .percentage-label{
        color: #EAFF6B;
        font-size: calc(24px * @measureSize);
        line-height: 1;
        text-align: center;
        margin-bottom: calc(20px * @measureSize);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .percentage-value{
        color: #6BCFFA;
        font-size: calc(96px * @measureSize);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }



    .min-target-scroll{
      width: calc(474px * @measureSize);
      color: #86CFF9;
      font-size: calc(22px * @measureSize);
      line-height: normal;
      text-align: center;
      white-space: pre-wrap;
      overflow: hidden;
      //margin-bottom: calc(56px * @measureSize);
      margin: 0 auto calc(20px * @measureSize);
      animation: 1500ms ease 4000ms 1 normal both running fadeInRight
    }

    .pie-bg{
      height: calc(36px * @measureSize);
      width: calc(474px * @measureSize);
      margin: 0 auto;
      background: url("../../../../assets/images/p1-center-pie-bg.png") no-repeat;
      background-size: cover;
      animation: 1000ms ease 6000ms 1 normal both running fadeInUp;
    }
  }


</style>