<template>
  <van-notice-bar left-icon="volume-o" :text="notice" />
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, i) in bannerImg" :key="i">
      <van-image :src="item" height="20rem" width="100%" />
    </van-swipe-item>
  </van-swipe>
  <van-grid>
    <van-grid-item icon="link-o" text="打卡" />
    <van-grid-item icon="guide-o" text="座位" />
    <van-grid-item icon="gift-o" text="活动" to="/activity" />
    <van-grid-item icon="eye-o" text="更多" />
  </van-grid>

  <p style="color: darkgray; margin-left: 1rem">预约教室</p>
  <van-cell-group inset>
    <van-cell title="4楼">
      <van-row gutter="20">
        <van-col span="8">
          <van-tag type="success" size="large">402</van-tag>
        </van-col>
        <van-col span="8">
          <van-tag type="warning" size="large">408</van-tag>
        </van-col>
        <van-col span="8">
          <van-tag type="primary" size="large">410</van-tag>
        </van-col>
      </van-row>
    </van-cell>
    <van-cell title="5楼" value="图书馆" label="暂未开放" />
  </van-cell-group>
  <van-divider dashed />

  <p style="color: darkgray; margin-left: 1rem">最近记录</p>
  <van-cell-group v-for="item in studyRecords" :key="item.id">
    <van-cell :title="item.appointmentClass" :value="item.appointmentTime" is-link @click="showPopup(item.id)" />
  </van-cell-group>
  <!--TODO 展示内容-->
  <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }">
    <van-divider>学习内容</van-divider>
    <van-tag size="large" type="primary" v-for="item in showAppointmentContent" style="margin-right: 2rem">{{ item }}</van-tag>
  </van-popup>
</template>

<script setup>
import { ref } from 'vue'

let notice = '欢迎来到:学习预约系统'

let bannerImg = [
  'http://47.98.184.192:8085/LightPicture/2023/05/cc30b6de64e1cf48.png',
  'http://47.98.184.192:8085/LightPicture/2023/05/1184aaa13e7a7c41.png',
  'http://47.98.184.192:8085/LightPicture/2023/05/18ce68d1a58acf3c.png',
]

let studyRecords = [
  {
    id: '1',
    appointmentClass: '402',
    appointmentTime: '学习3小时',
    appointmentContent: ['英语', '线性代数'],
  },
  {
    id: '2',
    appointmentClass: '410',
    appointmentTime: '学习5小时',
    appointmentContent: ['数学'],
  },
]

const show = ref(false)
const showPopup = (id) => {
  show.value = true
  studyRecords.forEach((e) => {
    if (id == e.id) {
      showAppointmentContent.value = e.appointmentContent
    }
  })
}

let showAppointmentContent = ref('')
</script>

<style scoped></style>
