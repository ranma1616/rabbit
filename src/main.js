
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 测试接口数据
// import { getCategory } from '@/apis/testAPI'
// 引入懒加载指令插件
import { lazyPlugin } from './directives'
import App from './App.vue'
import router from './router'
// getCategory().then(res => {
//   console.log(res);
// })
// 引入全局插件
import { componentPlugin } from './components'
const app = createApp(App)

app.use(createPinia())
app.use(componentPlugin)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

