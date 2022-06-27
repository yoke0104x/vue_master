<template>
  <div class="main-target">
    <div class="title-wrap">
      <TitleCard :title="title"/>
    </div>

    <div class="main-target-name" :title="currentData?.customer">{{currentData?.customer}}</div>
    <div class="progress-wrap" :style="{background: getBg(currentData.index)}">
      <img class="progress-bg" :src="getBg(currentData.index)" alt=""/>
      <div class="progress-info">
        <div class="percentage-label" :title="currentData?.category">{{currentData?.category}}</div>
        <div class="percentage-value">{{ currentData?.indicatorsValue }}<span class="target-unit">{{currentData?.unit}}</span></div>
      </div>
    </div>

    <div class="min-target-scroll" :title="currentData?.target">{{currentData?.target}}</div>
    <div class="pie-bg">
    </div>


  </div>

</template>

<script setup>
import TitleCard from "@/pages/firstScreenPage/component/centerBox/TitleCard";
import TextScroll from "@/components/textScroll/TextScroll";
import { ElProgress } from 'element-plus'
import {useFirstPageStore} from "@/store";
import {computed, ref, watch} from "vue";
import { isEmpty } from 'lodash';

const firstPageStore = useFirstPageStore();

const title = computed(() => firstPageStore.titles?.[1]);

const currentData = ref({});

const timer = ref(null)

watch(() => firstPageStore.mainTargetIndicatorsList, list => {
  if(!isEmpty(list)){
    timer.value && clearInterval(timer.value);
    currentData.value = {...list[0], index: 0};

    let index = 0;
    timer.value = setInterval(() => {
      if(index < list.length - 1){
        index ++
      }else{
        index = 0;
      }
      currentData.value = {...list[index], index}
    }, 10000)
  }
}, {immediate: true})

const getBg = index => require(`@/assets/images/p1-target-indicator${index || 0}.png`);



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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .progress-wrap{
      height: calc(327px * @measureSize);
      width: calc(327px * @measureSize);
      margin: 0 auto calc(45px * @measureSize);
      animation: 5s ease 3s 1 normal both running bounceInLeft;
      position: relative;

      .progress-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
      }

      .progress-bg{
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .percentage-label{
        color: #EAFF6B;
        font-size: calc(24px * @measureSize);
        line-height: 1.5;
        text-align: center;
        margin-bottom: calc(20px * @measureSize);
        padding: 0 calc(50px * @measureSize);
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
      }

      .percentage-value{
        color: #6BCFFA;
        font-size: calc(76px * @measureSize);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .target-unit{
          font-size: calc(20px * @measureSize);
          margin-left: calc(10px * @measureSize)
        }
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
      margin: 0 auto calc(20px * @measureSize);
      animation: 5s ease 3s 1 normal both running fadeInRight;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
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