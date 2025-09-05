
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 测试接口数据
import { getCategory } from '@/apis/testAPI'
import App from './App.vue'
import router from './router'
getCategory().then(res => {
  console.log(res);
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
