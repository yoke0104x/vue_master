<template>
    <Layout>
        <div class="screen-page-wrap">
            <swiper initial-slide="0" class="swiper-container-main" @slideChange="onSlideChange" @swiper="handleGetSwiper">
                <swiper-slide>
                    <FirstScreenPage />
                </swiper-slide>

                <swiper-slide>
                    <transformationCyclization />
                </swiper-slide>

                <swiper-slide>
                    <CarbonEmissionManagement />
                </swiper-slide>

                <swiper-slide>
                    <EnergyManagement />
                </swiper-slide>
            </swiper>
        </div>
    </Layout>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/custom-animation.css";
import FirstScreenPage from "@/pages/firstScreenPage";
import EnergyManagement from "@/pages/energyManagement";
import CarbonEmissionManagement from "@/pages/carbonEmissionManagement";
import transformationCyclization from "@/pages/transformationCyclization";
import Layout from "@/components/layout";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { onMounted, ref, watch } from "vue";
import { useMainStore } from "@/store";

export default {
    name: "App",
    components: {
        FirstScreenPage,
        EnergyManagement,
        CarbonEmissionManagement,
        Layout,
        Swiper,
        SwiperSlide,
        transformationCyclization,
    },
    setup() {
        const activeIndex = ref(0);
        const mySwiper = ref(null);
        const useStore = useMainStore();
        const onSlideChange = e => {
            activeIndex.value = e.activeIndex;
            // useStore.setHeaders(e.activeIndex);
        };

        const handleGetSwiper = swiper => (mySwiper.value = swiper);

        watch(
            () => [activeIndex.value, useStore.minHeaderTitles],
            newInfo => {
                useStore.setHeaders(newInfo?.[0]);
            },
            { immediate: true },
        );

        onMounted(() => {
            const ws = new WebSocket(`ws://${window.location.host}/dybigs/webSocket/screen`);
            //测试环境的
            // const ws = new WebSocket('ws://121.36.46.110:16993/dybigs/webSocket/screen');

            ws.onopen = function () {
                // ws.send('====链接成功===');
                console.log("=======连接成功=======:", ws);
            };

            ws.addEventListener("message", function (event) {
                const data = Number(event.data);
                const newIndex = data < 4 ? data : 0;
                mySwiper.value && mySwiper.value.slideTo(newIndex);
            });
        });

        return {
            onSlideChange,
            activeIndex,
            handleGetSwiper,
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
