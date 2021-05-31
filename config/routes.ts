//config/routes.ts
export default [
  {
    path: '/',
    component: '@/layouts/LayoutFixed',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
      },
      {
        path: '/home',
        component: '@/pages/index',
      },
      {
        path: '/browse',
        component: '@/pages/Browse',
      },
      {
        path: '/search',
        component: '@/pages/Search',
      },
      {
        path: '/downloads',
        component: '@/pages/Downloads',
      },
      {
        path: '/documentation',
        component: '@/pages/Documentation',
      },

      {
        path: '/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      {
        path: '/test',
        component: '@/pages/Test',
      },
      {
        path: '/users',
        component: '@/pages/users',
      },
      {
        path: '/network/:chart',
        component: '@/pages/Network/[index]',
      },
      {
        path: '/pie',
        component: '@/pages/Pie',
      },
      {
        name: '标准列表',
        path: '/listbasiclist',
        component: './ListBasicList',
      },
      {
        path: '/users',
        component: '@/pages/users',
      },
      {
        path: '/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      // {
      //   path: '/network/',
      //   component: '@/components/Network',
      // },
      {
        path: '/pie',
        component: '@/pages/Pie',
      },
    ],
  },
];
