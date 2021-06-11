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
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  hash: true,
  theme: {
    '@primary-color': '#0a81ab',
  },
});
