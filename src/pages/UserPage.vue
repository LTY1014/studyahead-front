<template>
  <div id="usePage">
    <div class="topRow">
      <van-image style="padding: 2rem" round width="5rem" height="5rem" :src="initUser.avatarUrl" />
      <van-button @click="handle" style="margin-top: 40px; margin-right: 2rem" round type="primary">编辑资料</van-button>
    </div>
    <van-grid>
      <van-grid-item icon="guide-o" text="记录" @click="showTips" />
      <van-grid-item icon="link-o" text="信息" @click="showTips" />
      <van-grid-item icon="contact" text="人员" @click="showTips" />
      <van-grid-item icon="underway-o" text="历史" @click="showTips" />
    </van-grid>
    <template v-if="initUser">
      <van-cell title="我的学习生涯" @click="showTips">
        <van-tag type="success" size="large">{{ initUser.studyDay }}天</van-tag>
      </van-cell>
      <van-cell title="个人设置" is-link to="/user" />
      <van-cell title="应用设置" is-link to="/user" />
      <van-cell title="其他设置" is-link to="/user" />
      <van-cell title="常见问题" is-link to="/user" />

      <van-button style="margin-top: 1rem" block type="warning">退出当前账号</van-button>
    </template>
  </div>
</template>

<script setup>
import { showToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

let initUser = {
  username: 'admin',
  phone: '13812345678',
  status: true,
  studyDay: 7,
  avatarUrl: 'https://i.loli.net/2019/04/28/5cc5a71a6e3b6.png',
}

const showTips = () => {
  showToast('正在开发中')
}
const handle = () => {
  router.push('/userdata')
}
</script>

<style scoped>
.topRow {
  background-color: #45bcd9;
  display: flex;
  justify-content: space-between;
}
</style>
