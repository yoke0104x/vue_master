<template>
  <Layout>
    <div class="screen-page-wrap">
      <FirstScreenPage/>
    </div>
  </Layout>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/custom-animation.css";
import FirstScreenPage from "@/pages/firstScreenPage";
import Layout from "@/components/layout";


export default {
  name: 'App',
  components: {
    FirstScreenPage,
    Layout
  }
}
</script>

<style scoped lang="less">
  .screen-page-wrap{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    background: transparent;
  }
</style>
