const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // 默认情况下babel-loader会忽略所有node_modules中文件。可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,
  // 部署应用包时的基本URL-默认情况,Vue CLI会假设你的应用被部署到一个域名的根路径。如果应用被部署到一个子路径，这时就需要用这个选项指定这个子路径。
  publicPath: "./",
  // 构建时的输出目录
  outputDir: "dist",
  // 防止生成静态资源（js、css、img、fonts）的目录（相对于outputDir）
  assetsDir: "",
  // 是否在保存的时候使用'eslint-loader'进行检查
  lintOnSave: true,
  // 如果不需要生产环境的source map，可以将其设置为false以增加生产环境构建。
  productionSourceMap: false,
  // 配置webpack-dev-server行为
  devServer: {
    // 编译后默认打开浏览器
    open: "http://localhost:9999",
    // 域名
    host: "0.0.0.0",
    // 端口
    port: 9999,
    // 是否https
    https: false,
    proxy: {},
  },
});
