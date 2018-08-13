import { getWechatKey } from '@api/public'
const wechat = {
  mutations: {
    WECHAT_KEY: (state, data) => {
      state.wechatKey = {...state.wechatKey, wechatKey: data}
    }
  },
  actions: {
    async getWechatKey ({ commit }, params) {
      await getWechatKey(params).then(res => {
        commit('WECHAT_KEY', res.data)
      })
    }
  }
}

export default wechat
