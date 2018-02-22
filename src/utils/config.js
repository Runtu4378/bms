module.exports = {
  baseURL: 'http://localhost:3000/api',
  // 分页配置
  defaultPage: 1, // 默认当前页数
  defaultPageSize: 10,    // 默认每页大小
  // 接口地址
  api: {
    login: '/user/login',
    logout: '/user/logout',
    book: '/book',
  },
}
