<template>
  <ContentLeft>
    <LeftBox/>
  </ContentLeft>

  <ContentCenter>
    <CenterBox/>
  </ContentCenter>

  <ContentRight>
    <RightBox/>
  </ContentRight>

</template>

<script>
import ContentLeft from "@/components/contentLeft";
import LeftBox from "@/pages/firstScreenPage/component/leftBox/LeftBox";
import ContentCenter from "@/components/contentCenter";
import CenterBox from "@/pages/firstScreenPage/component/centerBox/CenterBox";
import ContentRight from "@/components/contentRight";
import RightBox from "@/pages/firstScreenPage/component/rightBox/RightBox";

export default {
  name: "FirstScreenPage",
  components: {
    RightBox,
    ContentRight,
    CenterBox,
    ContentCenter,
    LeftBox,
    ContentLeft
  }
}
</script>

<style scoped>

</style>