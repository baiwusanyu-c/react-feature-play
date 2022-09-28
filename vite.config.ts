import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import progress from 'vite-plugin-progress'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    chunkSplitPlugin({
      // 指定拆包策略
      customSplitting: {
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'utils-vendor': [
          /src\/utils/,
          /src\/router/,
          /src\/components/,
          'remark-gfm',
          'react-markdown',
          'react-syntax-highlighter',
        ],
      },
    }),
    progress(),
    viteCompression(),
  ],
  server: {
    host: '0.0.0.0',
    // https 选项需要开启
    https: false,
    port: 3010,
  },
  build: {
    minify: true,
    cssCodeSplit: true,
    commonjsOptions: {
      ignoreTryCatch: false,
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})

