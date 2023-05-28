<template>
  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '5px' }">
    {{ orderInfo.place }}-{{ orderInfo.orderDate }}--{{ orderInfo.orderTime }}
  </van-divider>

  <van-field v-model="orderInfo.place" is-link readonly label="预约教室" placeholder="选择位置" @click="showPlacePicker = true" />
  <van-popup v-model:show="showPlacePicker" round position="bottom">
    <van-picker :columns="placeColumns" @cancel="showPlacePicker = false" @confirm="onPlaceConfirm" />
  </van-popup>

  <van-field v-model="orderInfo.orderDate" is-link readonly label="日期" placeholder="选择日期" @click="showDatePicker = true" />
  <van-popup v-model:show="showDatePicker" round position="bottom">
    <van-picker :columns="dateColumns" @cancel="showTimePicker = false" @confirm="onDateConfirm" />
  </van-popup>

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
import { getDay, getMonth } from '@/plugins/util'
import { useOrderInfoStore } from '@/store/orderInfoStore'
import { dateColumns, placeColumns, timeColumns } from '@/plugins/columns'
import { storeToRefs } from 'pinia'

let orderInfoStore = useOrderInfoStore()
orderInfoStore.initDate()
let { orderInfo } = storeToRefs(orderInfoStore)

onMounted(() => {})

const showDatePicker = ref(false)
const showTimePicker = ref(false)
const showEndTimePicker = ref(false)
const showPlacePicker = ref(false)

const onDateConfirm = ({ selectedOptions }) => {
  showDatePicker.value = false
  orderInfoStore.orderInfo.orderDate = getMonth() + '月' + selectedOptions[0].value
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
