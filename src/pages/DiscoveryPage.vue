<template>
  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '5px' }">
    {{ orderInfo.personNum }}人--{{ orderInfo.orderDate }}--{{ orderInfo.orderTime }}
  </van-divider>

  <!--选择人数-->
  <van-field v-model="personNum" is-link readonly label="人数" placeholder="选择人数" @click="showPicker = true" />
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
  </van-popup>

  <van-field v-model="orderInfo.orderDate" is-link readonly label="日期" placeholder="选择日期" @click="showDatePicker = true" />
  <van-popup v-model:show="showDatePicker" round position="bottom">
    <van-picker :columns="dateColumns" @cancel="showTimePicker = false" @confirm="onDateConfirm" />
  </van-popup>

  <van-field v-model="orderInfo.orderTime" is-link readonly label="时间" placeholder="选择时间" @click="showTimePicker = true" />
  <van-popup v-model:show="showTimePicker" round position="bottom">
    <van-picker :columns="timeColumns" @cancel="showTimePicker = false" @confirm="onTimeConfirm" />
  </van-popup>

  <van-field v-model="orderInfo.place" is-link readonly label="位置" placeholder="选择位置" @click="showPlacePicker = true" />
  <van-popup v-model:show="showPlacePicker" round position="bottom">
    <van-picker :columns="placeColumns" @cancel="showPlacePicker = false" @confirm="onPlaceConfirm" />
  </van-popup>

  <van-divider dashed />
  <van-cell-group inset>
    <van-field v-model="orderInfo.remark" label="预约描述" placeholder="" right-icon="edit" />
  </van-cell-group>
  <van-notice-bar left-icon="volume-o" text="提交后需等待确认" />
  <van-button type="primary" block @click="handleOrder">确认预约</van-button>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { showSuccessToast } from 'vant'
import { getMonth } from '@/plugins/util'
import { useOrderInfoStore } from '@/store/orderInfoStore'
import { pushWechat } from '@/api'

let orderInfoStore = useOrderInfoStore()

let personNum = orderInfoStore.personNum

let orderInfo = reactive({
  personNum: 2,
  orderDate: '05月19日',
  orderTime: '18:00',
  place: 'A座',
  remark: '',
  shopId: '1',
  shopName: 'A餐厅',
})

onMounted(() => {
  // console.log("选中shopId:",orderInfoStore.shopId)
})

let shopName = ref('A餐馆')

const columns = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },
  { text: '5', value: '5' },
  { text: '6', value: '6' },
]
const dateColumns = [
  { text: '1日', value: '1日' },
  { text: '2日', value: '2日' },
  { text: '3日', value: '3日' },
  { text: '4日', value: '4日' },
  { text: '5日', value: '5日' },
  { text: '6日', value: '6日' },
  { text: '7日', value: '7日' },
  { text: '8日', value: '8日' },
  { text: '9日', value: '9日' },
  { text: '10日', value: '10日' },
  { text: '11日', value: '11日' },
  { text: '12日', value: '12日' },
  { text: '13日', value: '13日' },
  { text: '14日', value: '14日' },
  { text: '15日', value: '15日' },
  { text: '16日', value: '16日' },
  { text: '17日', value: '17日' },
  { text: '18日', value: '18日' },
  { text: '19日', value: '19日' },
  { text: '20日', value: '20日' },
  { text: '21日', value: '21日' },
  { text: '22日', value: '22日' },
  { text: '23日', value: '23日' },
  { text: '24日', value: '24日' },
  { text: '25日', value: '25日' },
  { text: '26日', value: '26日' },
  { text: '27日', value: '27日' },
  { text: '28日', value: '28日' },
  { text: '29日', value: '29日' },
  { text: '30日', value: '30日' },
  { text: '31日', value: '31日' },
]
const timeColumns = [
  { text: '17:00', value: '17:00' },
  { text: '17:30', value: '17:30' },
  { text: '18:00', value: '18:00' },
  { text: '18:30', value: '18:30' },
  { text: '19:00', value: '19:00' },
  { text: '19:30', value: '19:30' },
  { text: '20:00', value: '20:00' },
]
const placeColumns = [
  { text: 'A座', value: 'A座' },
  { text: 'B座', value: 'B座' },
  { text: 'C座', value: 'C座' },
  { text: 'D座', value: 'D座' },
]
const showPicker = ref(false)
const showDatePicker = ref(false)
const showTimePicker = ref(false)
const showPlacePicker = ref(false)

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false
  orderInfo.personNum = selectedOptions[0].value
}

const onDateConfirm = ({ selectedOptions }) => {
  showDatePicker.value = false
  orderInfo.orderDate = getMonth() + '月' + selectedOptions[0].value
}

const onTimeConfirm = ({ selectedOptions }) => {
  showTimePicker.value = false
  orderInfo.orderTime = selectedOptions[0].value
}

const onPlaceConfirm = ({ selectedOptions }) => {
  showPlacePicker.value = false
  orderInfo.place = selectedOptions[0].value
}

const handleOrder = () => {
  if (!orderInfo.shopId) {
    showSuccessToast('还未选择餐厅')
    return
  }
  console.log(orderInfo)
  pushWechat(orderInfo).then((res) => {
    if (res.code !== 0) {
      console.log('发送失败')
    }
  })
  showSuccessToast('预约成功')
}
</script>

<style scoped></style>
