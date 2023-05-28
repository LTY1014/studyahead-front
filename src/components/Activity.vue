<template>
  <div v-for="(item, i) in images" :key="i">
    <van-image :src="item" />
    <van-divider>文化活动</van-divider>
  </div>
</template>

<script setup>
let images = [
  'http://47.98.184.192:8085/LightPicture/2023/05/cc30b6de64e1cf48.png',
  'http://47.98.184.192:8085/LightPicture/2023/05/18ce68d1a58acf3c.png',
  'http://47.98.184.192:8085/LightPicture/2023/05/1184aaa13e7a7c41.png',
]
</script>

<style scoped></style>
