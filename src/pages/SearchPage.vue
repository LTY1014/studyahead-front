<template>
  <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch" />
  <div>
    <van-tag type="primary" size="large">搜索记录</van-tag>
    <van-row>
      <van-button color='#9aa7b1' style='margin-right: 20px' v-show="searchHistory.length > 0" v-for="(item, i) in searchHistory" :key="i" @click='goSearch(item)'
        >{{ item }}
      </van-button>
    </van-row>
  </div>
  <van-divider dashed></van-divider>
  <div style="margin: 5rem 0">
    <van-tag type="warning" size="large">猜你想搜</van-tag>
    <van-row>
      <van-button color='#a9a773' style="margin-right: 20px">美食</van-button>
      <van-button color='#a9a773' style="margin-right: 20px">小吃</van-button>
      <van-button color='#a9a773' style="margin-right: 20px">饮品</van-button>
    </van-row>
  </div>
  <van-divider>猜你喜欢</van-divider>
  <van-grid :border="false" :column-num="2">
    <van-grid-item v-for="(item, i) in images" :key="i">
      <van-image :src="item" />
    </van-grid-item>
  </van-grid>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/store/searchStore'

const searchStore = useSearchStore()

let searchText = ref('')
let searchHistory = searchStore.searchHistory

const onSearch = (searchText) => {
  // console.log(searchText)
  searchStore.searchHistory.push(searchText)
}

let images = [
  'http://47.98.184.192:8085/LightPicture/2023/05/9667c950a7c17513.jpg',
  'http://47.98.184.192:8085/LightPicture/2023/05/d9a205c41f595487.jpg',
]

const goSearch=(item)=>{
  console.log(item)
}
</script>

<style scoped></style>
