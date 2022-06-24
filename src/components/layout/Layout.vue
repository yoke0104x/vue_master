<template>
    <div class="container">
        <div class="title-wrap" />
        <div class="title" @click="clickFull" >
            <img src="@/assets/images/title.png" alt="" style="width: 100%; height: 100%" />
        </div>
        <div class="title-name">
            <p>{{ pageTitle }}</p>
        </div>
        <div class="content-bg" />

        <!--    轮播页码-->
        <PageNation />
        <template v-if="minHeaderTitles?.length">
            <!--    content-->
            <slot />
        </template>

        <div class="title-date">{{ titleDate }}</div>
    </div>
</template>

<script>
import { playAnimation } from "@/utils";
import moment from "moment";
import PageNation from "@/components/pageNation";
import { mapActions, mapState } from "pinia";
import { useMainStore } from "@/store";
import { useFullscreen } from "@vueuse/core";
export default {
    name: "Layout",
    data() {
        return {
            titleDate: moment().format("YYYY年MM月DD日 HH:mm:ss"),
            time: null,
        };
    },
    setup() {

    },
    mounted() {
        this.$nextTick(() => {
            // title 背景
            playAnimation(".title-wrap", [{ type: "fadeInDown", name: "向下移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false }]);

            // title
            playAnimation(".title", [{ type: "flipInY", name: "翻转进入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false }]);

            //name
            playAnimation(".title-name", [{ type: "fadeInUp", name: "向上移入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false }]);

            //日期
            playAnimation(".title-date", [{ type: "fadeIn", name: "淡入", delayed: 0, loop: false, frequency: 1, duration: 10, isPlayer: false, isDisabled: false }]);

            //主背景（切斜部分）
            playAnimation(".content-bg", [{ type: "bounceInRight", name: "向左弹入", delayed: 0, loop: false, frequency: 1, duration: 1, isPlayer: false, isDisabled: false }]);

            // 时间更新
            this.time = setInterval(() => {
                this.titleDate = moment().format("YYYY年MM月DD日 HH:mm:ss");
            }, 1000);
        });
    },
    computed: {
        ...mapState(useMainStore, ["minHeaderTitles", "pageTitle"]),
    },
    components: {
        PageNation,
    },
    created() {
        // 获取当前页面titles
        this.getMinHeaderTitlesAction();
    },
    methods: {
        ...mapActions(useMainStore, ["getMinHeaderTitlesAction"]),
      clickFull(){
          console.log(21123123)
      }
    },
    unmounted() {
        clearInterval(this.time);
    },
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
