import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes: routes,
  title: 'CeDR Atlas',
  dva: {
    immer: true,
    hmr: false,
  },
  locale: {
    default: 'en-US',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  hash: true,
  base: '/cedr',
  outputPath: './dist/cedr',
  publicPath: '/cedr/',
  dynamicImport: {
    loading: '@/Loading',
  },
  theme: {
    '@primary-color': '#0a81ab',
  },
});
