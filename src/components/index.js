// 把所有组件全局注册
// 通过插件的方式
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView',ImageView)
    app.component('XtxSku',XtxSku)
  }
}