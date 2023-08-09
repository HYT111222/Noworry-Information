/* eslint-disable */
import legacyPlugin from '@vitejs/plugin-legacy';
import * as path from 'path';
import vuePlugin from '@vitejs/plugin-vue';
// @see https://cn.vitejs.dev/config/
export default ({
  command,
  mode
}) => {
  let rollupOptions = {};
  let optimizeDeps = {};

  let alias = {
    '.git': path.resolve(__dirname, './.git'),
    'node_modules': path.resolve(__dirname, './node_modules'),
    'public': path.resolve(__dirname, './public'),
    'src': path.resolve(__dirname, './src'),
    '@': path.resolve(__dirname, './src')
  }

  let proxy = {
    "/api": {
      "target": 'http://localhost:3000', // 对应的代理地址
      "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
      "rewrite": {
        // '^/api': "/api"
      }
    }
  }

  // todo 替换为原有变量
  let define = {
    'process.env.NODE_ENV': command === 'serve' ? '"development"' : '"production"',
  }

  let esbuild = {}

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
    },
    define: define,
    server: {
      // 代理
      proxy,
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'dist', // 产出目录
      rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      legacyPlugin({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
      }), vuePlugin(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
  };
};