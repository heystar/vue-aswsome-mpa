import { BASE_API } from './baseUrl'
import { getFetch, PostFetch } from '@utils/request'

// demo 城市列表
export const getCities = params =>
    getFetch(BASE_API + '/wcap/theme_activity_controller/get_city_list.do', params)
// demo 浏览历史
export const getHistory = () =>
    PostFetch(BASE_API + '/commodity/getHistoryOrCommCommodity')
