<template>
  <div id="app">
    <img src="@assets/logo.png">
    <HelloWorld msg="Welcome to Your MUTLIPLE PAGE Vue.js App"/>
    <div>
      <van-button target="_blank" type="default">首页</van-button>
      <van-button tag="a" href="/subModuleA.html" target="_blank" type="primary">模块A</van-button>
      <van-button tag="a" href="/subModuleB.html" target="_blank" type="danger">模块B</van-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import { Button } from 'vant'
import { getCities, getHistory } from '@api'
import { hideOptionMenu } from '@utils/wechat'
export default {
  name: 'app',
  created () {
    let _this = this
    // 微信jdk功能测试
    const wx = this.$wechat
    let params = {brandCode: 'TS', url: window.location.href}
    _this.$store.dispatch('getWechatKey', params).then(() => {
      hideOptionMenu(wx, _this.$store.state.wechat.wechatKey)
    })

    // 请求测试
    this.getAllData()
  },
  methods: {
    async getAllData() {
      // get 请求
      await getCities({brandCode: 'TS',shopOrgCode: 'ADBJ73'}).then(res => {
        res.data
      })
      // post 请求
      await getHistory().then(res => {
        res.data
      })
    }
  },
  components: {
    HelloWorld,
    'van-button': Button
  }
}
</script>

<style lang="scss">
#app {
    font-family: $system-font; // 自动导入@mixin
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $system-color;// 自动导入@mixin
    font-size: $system-size;// 自动导入@mixin
    margin-top: 60px;
}
</style>
