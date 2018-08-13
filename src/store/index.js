import Vue from 'vue'
import Vuex from 'vuex'
import wechat from './modules/wechat'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    wechat
  },
  getters
})

export default store
