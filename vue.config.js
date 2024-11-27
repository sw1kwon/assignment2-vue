import { defineConfig } from '@vue/cli-service';

export default defineConfig({
  transpileDependencies: true, // Vue CLI에서 지원하는 옵션

  configureWebpack: (config) => {
    // Webpack 설정을 덮어씌움
    config.entry = './src/main.ts'; // 엔트리 파일 설정
    config.resolve = {
      extensions: ['.ts', '.js', '.vue', '.json'] // 처리할 확장자 설정
    };
  }
});
