const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    entry: './src/main.ts', // main.ts를 엔트리 파일로 지정
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'], // .ts 확장자를 포함해 Webpack이 처리할 파일 설정
    },
  },
});
