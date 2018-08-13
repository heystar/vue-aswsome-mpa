import Vue from 'vue'
import App from './App.vue'
import WechatPlugin from '@plugins/wechat'
import store from '@store'
import '@plugins/flexible'
Vue.config.productionTip = false

Vue.use(WechatPlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
