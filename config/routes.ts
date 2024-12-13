export default [
  {
    path: '/',
    component: '@/layouts/GlobalLayout',
    routes: [
      { path: '/', redirect: '/flv' },
      { path: '/flv', component: './Flv' },
      { path: '/hls', component: './Hls' },
    ],
  },
];
