export const getMonth = () => {
  const date = new Date()
  let month = date.getMonth() + 1 // 月
  // 给一位数的数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  return month
}

export const getDay = () => {
  const time = new Date()
  let date = time.getDate()
  date = date < 10 ? '0' + date : date
  return date
}

/**
 * 获取当前时间(格式为16:01:05)
 * @returns {string}
 */
export const getTime = () => {
  let time = new Date()
  let h = time.getHours()
  h = h < 10 ? '0' + h : h //当小时数小于10时，在前面补0，下面同理
  let m = time.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = time.getSeconds()
  s = s < 10 ? '0' + s : s
  return h + ':' + m + ':' + s
}

/**
 * 获取当前日期(格式为2023年05月27号 )
 * @returns {string}
 */
export const getDate = () => {
  let time = new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1 //获得月份的少1
  month = month < 10 ? '0' + month : month
  let date = time.getDate()
  date = date < 10 ? '0' + date : date
  return year + '年' + month + '月' + date + '号 '
}

/**
 * 返回当前星期
 * @returns {string}
 */
export const getWeek = () => {
  const time = new Date()
  const day = time.getDay()
  const arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return arr[day]
}
