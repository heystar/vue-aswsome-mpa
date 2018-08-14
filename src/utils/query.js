/**
 * 获取当前Url参数
 * @method query
 * @return {Object} 参数对象
 */
export const query = () => {
  const query = {}
  const url = location.search
  if (url.indexOf("?") != -1) {
    const array = url.substr(1).split('&')
    array.forEach(element => {
      query[element.split('=')[0]] = unescape(element.split('=')[1])
    })
  }
  return query
}
