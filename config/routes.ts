//config/routes.ts
export default [
  {
    path: '/',
    component: '@/layouts/LayoutFixed',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
        breadcrumbName: 'Home',
      },
      {
        path: '/home',
        component: '@/pages/index',
        breadcrumbName: 'Home',
      },
      {
        path: '/users/:id',
        component: '@/pages/users/[index]',
      },
      {
        path: '/search',
        component: '@/pages/Search',
        breadcrumbName: 'Search',
      },
      {
        path: '/downloads',
        component: '@/pages/Downloads',
        breadcrumbName: 'Downloads',
      },
      {
        path: '/documentation',
        component: '@/pages/Documentation',
        breadcrumbName: 'Documentation',
      },
      {
        path: '/contact',
        component: '@/pages/Contact',
        breadcrumbName: 'Contact',
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
      {
        path: '/scatter',
        component: '@/pages/Tsne',
      },
      {
        path: '/general',
        component: '@/pages/General',
      },
      {
        path: '/browse',
        component: '@/pages/Browse',
      },
      {
        // exact: true,
        path: '/subproject/:subproject',
        component: '@/pages/Subproject/[index]',
      },
    ],
  },
];
