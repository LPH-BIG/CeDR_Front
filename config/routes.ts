//config/routes.ts
export default [
  {
    path: '/cedr',
    component: '@/layouts/LayoutFixed',
    routes: [
      {
        path: '/cedr',
        component: '@/pages/index',
        breadcrumbName: 'Home',
      },
      {
        path: '/cedr/home',
        component: '@/pages/index',
        breadcrumbName: 'Home',
      },
      {
        path: '/cedr/users/:id',
        component: '@/pages/users/[index]',
      },
      {
        path: '/cedr/search',
        component: '@/pages/Search',
        breadcrumbName: 'Search',
      },
      {
        path: '/cedr/downloads',
        component: '@/pages/Downloads',
        breadcrumbName: 'Downloads',
      },
      {
        path: '/cedr/documentation',
        component: '@/pages/Documentation',
        breadcrumbName: 'Documentation',
      },
      {
        path: '/cedr/contact',
        component: '@/pages/Contact',
        breadcrumbName: 'Contact',
      },
      {
        path: '/cedr/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      {
        path: '/cedr/test',
        component: '@/pages/Test',
      },
      // {
      //   name: '标准列表',
      //   path: '/table',
      //   component: '@/pages/Table',
      // },
      {
        path: '/cedr/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      // {
      //   path: '/network/',
      //   component: '@/components/Network',
      // },
      {
        path: '/cedr/general',
        component: '@/pages/General/[index]',
      },
      {
        path: '/cedr/general/:type/:name',
        component: '@/pages/General/[index]',
      },
      {
        // exact: true,
        path: '/cedr/subproject/:subproject',
        component: '@/pages/Subproject/[index]',
      },
    ],
  },
];
