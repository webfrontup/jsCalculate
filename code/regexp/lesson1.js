export default (str) => {
  // 字符是否重复
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
