import { defineConfig } from 'vite';
// import path from 'path';

export default defineConfig({
  base: './',
  //複数ページのビルドは下記設定が必要
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: path.resolve(__dirname, 'index.html'),
  //       nested: path.resolve(__dirname, 'nested/index.html')
  //     }
  //   }
  // }
})