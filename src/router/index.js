import Vue from 'vue';
import VueRouter from 'vue-router';

import PostList from '@_/theme/PostList.vue';
const PageNotFound = () =>
  import(
    /* webpackChunkName: "bundle.page-not-found" */ '@_/theme/page-not-found.vue'
  );

Vue.use(VueRouter);

const parseId = router => {
  let page = 0;
  if (router.query.page) {
    page = parseInt(router.query.page);
  }
  return {
    id: router.params.id,
    page
  };
};

const routes = [
  {
    path: '/',
    redirect: '/category/front-end'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "bundle.login" */ '@_/theme/Login.vue')
  },
  {
    path: '/category/:id',
    name: 'post-list',
    props: parseId,
    component: PostList
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
];

// const router = new VueRouter({
//   mode: 'history',
//   // linkExactActiveClass: 'is-active',
//   linkActiveClass: 'is-active',
//   scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
//   // base: process.env.BASE_URL,
//   routes
// });

// export default router;

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    // linkExactActiveClass: 'is-active',
    linkActiveClass: 'is-active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
    // base: process.env.BASE_URL,
    routes
  });

export { createRouter };
