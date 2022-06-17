<template>
    <Layout>
        <div class="screen-page-wrap">
            <swiper class="swiper-container-main" @slideChange="onSlideChange">
                <swiper-slide>
                    <FirstScreenPage />
                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper>
        </div>
    </Layout>
  <div ref="swiper">111</div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/custom-animation.css";
import FirstScreenPage from "@/pages/firstScreenPage";
import Layout from "@/components/layout";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import {onMounted, ref} from "vue";
export default {
    name: "App",
    components: {
        FirstScreenPage,
        Layout,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const activeIndex = ref(0);

        const onSlideChange = e => {
            console.log(e.activeIndex);
            activeIndex.value = e.activeIndex;
        };
        return {
            onSlideChange,
            activeIndex,
        };
    },
};
</script>

<style scoped lang="less">
.screen-page-wrap {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background: transparent;
}
.swiper-container-main {
    height: 100%;
}
</style>
