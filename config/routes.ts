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
        path: '/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      {
        path: '/general',
        component: '@/pages/General/[index]',
      },
      {
        path: '/general/:type/:name',
        component: '@/pages/General/[index]',
      },
      {
        path: '/general/:type1/:name1/:type2/:name2/:type3/:name3',
        component: '@/pages/General/[index]',
      },
      {
        path: '/dataset/:datasetid',
        component: '@/pages/Dataset/[index]',
      },
      {
        path: '/association/:association',
        component: '@/pages/Association/[index]',
      },
      {
        path: '/browse',
        component: '@/pages/Browse/[index]',
      },
      {
        path: '/browse/:type/:name',
        component: '@/pages/Browse/[index]',
      },
    ],
  },
];
