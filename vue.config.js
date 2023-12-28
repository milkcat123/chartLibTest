module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  pages: {
      index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板來源
          template: 'public/index.html',
          // 在 dist/index.html 的輸出
          filename: 'index.html',
          // 當使用 title 選項時，
          // template 中的 title 標簽需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Chart Test'
      }
  },

  // type :boolean defalut :"false"
  // 是否使用包含運行時編譯器的 Vue 構建版本。設置為 true 後你就可以在 Vue 組件中使用 template 選項了，但是這會讓你的應用額外增加 10kb 左右。
  // 具體信息看官網 https://cn.vuejs.org/v2/guide/installation.html#運行時+編譯器vs.只包含運行時
  runtimeCompiler: true,
  transpileDependencies: true,


}