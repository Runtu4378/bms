const path = require('path')

const staticRootDir = path.resolve(__dirname, '../')  // 运行环境根目录
const srcRootDir = path.resolve(staticRootDir, './src') // 项目业务代码根目录
const buildDir = path.resolve(staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = {
  staticRootDir: staticRootDir,
  srcRootDir: srcRootDir,
  buildDir: buildDir,

  dev: {
    host: 'localhost',
    port: 8081,
    autoOpenBrowser: true,
    errorOverlay: true,
    assetsPublicPath: '/',
    proxyTable: {},
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
  },
}
