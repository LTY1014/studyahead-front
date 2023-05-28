<template>
  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '5px' }"> {{ orderInfo.place }}--{{ orderInfo.orderDate }} </van-divider>

  <van-field v-model="orderInfo.place" is-link readonly label="预约教室" placeholder="选择位置" @click="showPlacePicker = true" />
  <van-popup v-model:show="showPlacePicker" round position="bottom">
    <van-picker :columns="placeColumns" @cancel="showPlacePicker = false" @confirm="onPlaceConfirm" />
  </van-popup>

  <van-cell title="选择日期" :value="orderInfo.orderDate" @click="showDate = true" />
  <van-calendar v-model:show="showDate" @confirm="onConfirm" />

  <van-field v-model="orderInfo.startTime" is-link readonly label="开始时间" placeholder="选择时间" @click="showTimePicker = true" />
  <van-popup v-model:show="showTimePicker" round position="bottom">
    <van-picker :columns="timeColumns" @cancel="showTimePicker = false" @confirm="onTimeConfirm" />
  </van-popup>

  <van-field v-model="orderInfo.endTime" is-link readonly label="结束时间" placeholder="选择时间" @click="showEndTimePicker = true" />
  <van-popup v-model:show="showEndTimePicker" round position="bottom">
    <van-picker :columns="timeColumns" @cancel="showTimePicker = false" @confirm="onEndTimeConfirm" />
  </van-popup>

  <van-divider dashed />
  <van-cell-group inset>
    <van-field v-model="orderInfo.appointmentContent" label="预约内容" placeholder="" right-icon="edit" />
  </van-cell-group>
  <van-notice-bar left-icon="volume-o" text="提交后需等待确认" />
  <van-button type="primary" block @click="handleOrder">确认预约</van-button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { showFailToast, showSuccessToast } from 'vant'
import { useOrderInfoStore } from '@/store/orderInfoStore'
import { placeColumns, timeColumns } from '@/plugins/columns'
import { storeToRefs } from 'pinia'

let orderInfoStore = useOrderInfoStore()
orderInfoStore.initDate()
let { orderInfo } = storeToRefs(orderInfoStore)

onMounted(() => {})

const showTimePicker = ref(false)
const showEndTimePicker = ref(false)
const showPlacePicker = ref(false)
const showDate = ref(false)

const onConfirm = (value) => {
  showDate.value = false
  let month = value.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = value.getDate()
  day = day < 10 ? '0' + day : day
  orderInfoStore.orderInfo.orderDate = month + '月' + day + '日'
}

const onTimeConfirm = ({ selectedOptions }) => {
  showTimePicker.value = false
  orderInfoStore.orderInfo.startTime = selectedOptions[0].value
}

const onEndTimeConfirm = ({ selectedOptions }) => {
  showEndTimePicker.value = false
  let endTime = selectedOptions[0].value
  let startTime = orderInfoStore.orderInfo.startTime
  if (endTime.split(':')[0] <= startTime.split(':')) {
    showFailToast('时间选择错误')
    return
  }
  orderInfoStore.orderInfo.endTime = selectedOptions[0].value
}

const onPlaceConfirm = ({ selectedOptions }) => {
  showPlacePicker.value = false
  orderInfoStore.orderInfo.place = selectedOptions[0].value
}

const handleOrder = () => {
  console.log(orderInfo.value)
  showSuccessToast('预约成功')
}
</script>

<style scoped></style>
