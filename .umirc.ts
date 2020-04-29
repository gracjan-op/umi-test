import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      exact: true,
      component: '@/pages/index.tsx',
    },
    {
      component: '@/pages/404.tsx',
    },
  ],
});
