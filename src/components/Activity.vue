<template>
  <div v-for="(item, i) in images" :key="i">
    <van-image :src="item" />
    <van-button type="primary" block>活动中心</van-button>
    <van-circle v-model:current-rate="currentRate" :rate="30" :speed="100" :text="text" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

let images = ['http://47.98.184.192:8085/LightPicture/2023/05/cc30b6de64e1cf48.png']

const currentRate = ref(0)
const text = computed(() => currentRate.value.toFixed(0) + '%')
</script>

<style scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
</style>
