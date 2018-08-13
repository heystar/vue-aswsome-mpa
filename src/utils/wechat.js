/**
 * 微信配置[私有]
 * @method _auth
 * @param {Object} wx this.$wechat
 * @param {Object} params 从接口获取的数据
 * @param {Array} jsApiList 功能列表
 */
const _auth = (wx, params, jsApiList) => {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: params.appId, // 必填，公众号的唯一标识
    timestamp: params.timestamp, // 必填，生成签名的时间戳
    nonceStr: params.nonceStr, // 必填，生成签名的随机串
    signature: params.signature, // 必填，签名
    jsApiList
  })
}

/**
 * 关闭分享
 * @method hideOptionMenu
 * @param {Object} wx this.$wechat
 * @param {Object} params 从接口获取的数据
 */
export const hideOptionMenu = (wx, params) => {
  _auth(wx, params, ['checkJsApi'])
  wx.ready(function () {
    wx.hideOptionMenu()
  })
}
