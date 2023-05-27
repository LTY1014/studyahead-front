export const getMonth = () => {
  const date = new Date()
  let month = date.getMonth() + 1 // 月
  // 给一位数的数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  return month
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
 * 获取当前日期(格式为05月27日)
 * @returns {string}
 */
export const getDate = () => {
  let time = new Date()
  let m = time.getMonth() + 1
  m = m < 10 ? '0' + m : m //当小时数小于10时，在前面补0，下面同理
  let day = time.getDate()
  day = day < 10 ? '0' + day : day
  return m + '月' + day + '日'
}
