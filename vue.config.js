const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true, // Vue CLI에서 지원하는 옵션

  configureWebpack: {
    entry: './src/main.ts', // 엔트리 파일 설정
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'] // 처리할 확장자 설정
    }
  }
});
