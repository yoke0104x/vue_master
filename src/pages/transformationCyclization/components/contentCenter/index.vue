<script setup>

import { useMainStore } from "@/store";
import { computed } from "vue";

const mainStore = useMainStore();

const data = computed(()=>{
  let color = ["#49B7F4", "#33E966", "#F88838" ,"#BEED03"]
  return mainStore.targetList?.filter(el=> el.type == 2)?.map((el,index)=>{
    el.icon = require(`@/assets/images/group${index+1}.png`);
    el.color = color[index]
    return el
  })
})

const dataImages = [
  // require("@/assets/images/p2-1.png"),
  // require("@/assets/images/p2-2.png"),
  // require("@/assets/images/p2-3.png"),
  // require("@/assets/images/p2-4.png"),
  // require("@/assets/images/p2-5.png"),
]

</script>

<template>
  <div>
    <div class="top-indicators-container">
      <div class="top-indicators-item" v-for="(item, index) in data" :key="index">
        <div class="icon-box">
          <img :src="item.icon" alt=""/>
        </div>
        <div class="detail-wrap">
          <div class="detail-target" :style="{color: item.color}">{{item.target}}<span class="detail-unit">{{item.unit}}</span></div>
          <div class="detail-name">{{item.customer}}</div>
        </div>
      </div>
    </div>

    <div>
      <div v-for="(item,index) in dataImages" :key="index" :style="{backgroundImage:`url(${item})`}" :class="`item_imag${index + 1}`" ></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../../../global.less";
@import "./index.less";
.top-indicators-container{
  width: calc(1447px * @measureSize);
  height: calc(148px * @measureSize);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: url("../../../../assets/images/p1-center-top-bg.png") left bottom no-repeat;
  animation: 1000ms ease 1000ms 1 normal both running fadeIn;
  padding: 0 calc(40px * @measureSize);
  .top-indicators-item{
    display: flex;
    align-items: center;
    &:last-child{
      margin-right: 0;
    }

    .icon-box{
      flex-shrink: 0;
      margin-right: calc(15px * @measureSize);
      width: calc(120px * @measureSize);
      height: calc(120px * @measureSize);
      animation: 1000ms ease 2200ms 1 normal both running fadeIn;


      img{
        width: 100%;
      }
    }

    .detail-wrap{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.item_imag1{
  //width: 1344px;
  //height: 1875px;
  //animation: myAnimation 3.00s steps(1) infinite;
  webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>