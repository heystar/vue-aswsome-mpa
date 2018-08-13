// 本地环境Mock地址或者其它路径
// 只需修改devBaseAPI属性
// const devBaseAPI = '/api'
const devBaseAPI = 'http://10.0.30.96/mock/78'
export const BASE_API =  process.env.NODE_ENV === 'production' ? '' : devBaseAPI
