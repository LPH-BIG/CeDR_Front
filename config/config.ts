import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes: routes,
  title: 'CeDR Atlas',
  dva: {
    immer: true,
    hmr: false,
    lazyLoad: true,
    disableModelsReExport: true,
  },
  // antd: {
  //   dark: true,
  //   compact: true,
  // },
  locale: {
    default: 'en-US',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  hash: true,
  //由于最终部署在二级域名下，因此需要配置base,outputpath,publicpath
  base: '/cedr',
  outputPath: './dist/cedr',
  publicPath: '/cedr/',
  //动态加载能减小初次加载时长
  dynamicImport: {
    loading: '@/Loading',
  },
  // //SSR服务端渲染和预渲染
  // ssr:{},
  // exportStatic:{},
  theme: {
    // '@primary-color': '#0a81ab',
    '@primary-color': '#0a81ab',
  },
  headScripts: [
    {
      type: 'text/javascript',
      src: `https://v1.cnzz.com/z_stat.php?id=1280252008&web_id=1280252008`,
    },
  ],
  metas: [
    {
      name: 'viewport',
      content: 'shrink-to-fit=yes',
    },
  ],
});
