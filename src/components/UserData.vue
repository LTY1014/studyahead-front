<template>
  <van-cell-group inset>
    <van-field label="昵称" placeholder="请输入用户昵称" right-icon="edit" />
    <van-field label="电话" placeholder="13812345678" right-icon="phone-o" readonly />
    <van-field label="性别" placeholder="男" readonly />
    <van-field label="年龄" placeholder="18岁" readonly />
    <van-field label="城市" placeholder="温州" readonly />
  </van-cell-group>
  <van-button type="primary" block @click="ok">完成</van-button>
</template>

<script setup>
import { showSuccessToast } from 'vant'

const ok = () => {
  showSuccessToast('编辑成功')
}
</script>

<style scoped></style>
