<script setup>
import Trendchart from "./components/Trendchart";
import EnergyConsumption from "./components/EnergyConsumption";
import TrendchartRight from "./components/TrendchartRight";
</script>

<template>
    <content-left>
        <Trendchart />
    </content-left>
    <content-center>
        <EnergyConsumption />
    </content-center>
    <content-right>
        <TrendchartRight />
    </content-right>
</template>

<style></style>
