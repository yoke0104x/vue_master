<script setup>
import primaryObjective from "./components/primaryObjective";
import completionOfKeyProjects from "./components/completionOfKeyProjects"
import contentCenters from "./components/contentCenter"
</script>

<template>
    <content-left>
        <primaryObjective />
    </content-left>
    <content-center>
        <contentCenters />
    </content-center>
    <content-right>
      <completionOfKeyProjects />
    </content-right>
</template>

<style lang="less" scoped>
@import "../../global.less";
</style>
