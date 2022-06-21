<script setup>
import LinkRatio from '@/components/LinkRatio';
import TitleTarget from '@/components/titleTarget';
import {useMainStore} from "@/store";
import {computed} from "vue";
import { find, isEqual, filter, some, map } from 'lodash';

const ID_ENUM = {
  leftLinkRatioId: "57",
  rightLinkRatioId: "60",
  dischargeIds: ["58", "59"]
}

const CarbonIcon = {
  left: require('@/assets/images/p3-carbon-left-icon.png'),
  right: require('@/assets/images/p3-carbon-right-icon.png'),
}

const mainStore = useMainStore();

const title = computed(() => find(mainStore.minHeaderTitles, item => isEqual(item.type, 9))?.title) ?? '';

const leftLinkRatioData = computed(() => find(mainStore.targetList, item => isEqual(item.id, ID_ENUM.leftLinkRatioId)));

const rightLinkRatioData = computed(() => find(mainStore.targetList, item => isEqual(item.id, ID_ENUM.rightLinkRatioId)));

const dischargesData = computed(() =>
  map(
      filter(mainStore.targetList, item => some(ID_ENUM.dischargeIds, i => isEqual(i, item.id))),
      targetItem => {
        const flag = isEqual(targetItem.id, ID_ENUM.dischargeIds[0]);
        targetItem.icon = flag ? require("@/assets/images/p3-target-discharge-58.png") : require("@/assets/images/p3-target-discharge-59.png");
        targetItem.color = flag ? "#F9FC73" : "#39A0FF";
        return targetItem;
  })
);



</script>


<template>

  <div class="statis_container">
    <link-ratio :data="leftLinkRatioData" :colors="['#87FC73', '#44D7B6']">
      <template #icon>
        <img :src="CarbonIcon.left" alt=""/>
      </template>
    </link-ratio>

    <div class="statis_target">
      <title-target :data="dischargesData"/>
      <div class="title-wrap">
        <second-title :name="title"/>
      </div>
    </div>

    <link-ratio :data="rightLinkRatioData" type="right" :colors="['#FB6815', '#FEDB65']">
      <template #icon>
        <img :src="CarbonIcon.right" alt=""/>
      </template>
    </link-ratio>
  </div>

</template>

<style scoped lang="less">
@import "../../../../global";

.statis_container{
  display: flex;
  align-items: center;
  justify-content: center;

  .statis_target{
    margin: 0 calc(85px * @measureSize);

    .title-wrap{
      display: flex;
      justify-content: center;
      margin-top: calc(43px * @measureSize);
    }
  }
}

</style>