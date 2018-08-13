import { BASE_API } from './baseUrl'
import { getFetch } from '@utils/request'

// 登录微信
export const getWechatKey = (params) => getFetch(BASE_API + '/wechat/wechat_js/sign.do', params)
