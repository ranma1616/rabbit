// 封装倒计时
import { computed, onUnmounted, ref } from "vue"
import dayjs from "dayjs"
export const useCountDown = ()=>{
  // 1. 响应式数据
  const time = ref(0)
  // 格式化时间为多少分多少秒
  const formatTime = computed(()=> dayjs.unix(time.value).format('mm分ss秒'))
  // 2. 开启倒计时函数
  const start = (currentTime)=>{
    // 开始倒计时逻辑
    // 核心逻辑的编写
    time.value = currentTime
    const intervalId = setInterval(()=>{
      if (time.value > 0) {
        time.value--
      } else {
        clearInterval(intervalId)
      }
    },1000)
  }
  // 重置
  const reset = (currentTime) => {
    time.value = currentTime
  }
  onUnmounted(()=>{
     clearInterval(intervalId)
  })
  return {
    formatTime,
    start,
    reset
  }
}