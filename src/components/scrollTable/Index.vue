<script setup>
import vueSeamless from "vue-seamless-scroll/src";
import { ElRow, ElCol } from "element-plus";
  const props = defineProps({
    title: String,
    columns: Array,
    data: Array,
    loading: Boolean
  })
</script>

<template>
  <Loading :loading="loading">
    <div>
      <div class="title">{{props.title}}</div>
      <div class="today-content">
        <div class="today-header">
          <el-row>
            <el-col v-for="(item, index) in props.columns" :key="index" :span="item.span">{{ item?.title }} </el-col>
          </el-row>
        </div>
        <vueSeamless :data="props.data" class="today-key-c">
          <div v-for="(items, index) in props.data" :key="index" class="keyword">
            <el-row>
              <el-col class="ti-record-mail" v-for="(item, index) in props.columns" :key="index" :span="item.span">
                {{ items[item.key] }}
              </el-col>
            </el-row>
          </div>
        </vueSeamless>
      </div>
    </div>
  </Loading>
</template>

<style lang="less" scoped>
@import "../../global.less";
.keyword {
  padding: calc(14px * @measureSize) 0;

  &:nth-child(odd) {
    background: rgba(34,64,109,0.8);
  }

  &:nth-child(even) {
    //background: #fff;
  }
}

.title {
  color: #fff;
  font-size: calc(28px * @measureSize);
  margin-left: calc(48px * @measureSize);
  margin-top: calc(20px * @measureSize);
}
.today-content {
  padding: 0 calc(30px * @measureSize);
  margin-top: calc(10px * @measureSize);
}
.el-col {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
.today-header {
  color: rgb(73, 183, 244);
  padding: calc(25px * @measureSize) 0;
  font-size: calc(14px * @measureSize);
}
.today-key-c {
  overflow: hidden;
  height: 90%;
}
.ti-record-mail {
  color: #fff;
  font-size: calc(14px * @measureSize);
}
</style>
