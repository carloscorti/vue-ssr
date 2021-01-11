import Vue from 'vue';
import VueRouter from 'vue-router';

// import PageNotFound from '@_/theme/page-not-found.vue';
import PostList from '@_/theme/PostList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "bundle.login" */ '@_/theme/Login.vue')
  },
  {
    path: '/category/front-end',
    name: 'post-list',
    // component: () =>
    //   import(
    //     /* webpackChunkName: "bundle.posts-list" */ '@_/theme/PostList.vue'
    //   )
    component: PostList
  },
  {
    path: '/',
    redirect: '/category/front-end'
  },
  {
    path: '*',
    name: 'page-not-found',
    // component: PageNotFound
    component: () =>
      import(
        /* webpackChunkName: "bundle.page-not-found" */ '@_/theme/page-not-found.vue'
      )
  }
];

const router = new VueRouter({
  mode: 'history',
  // linkExactActiveClass: 'is-active',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  // base: process.env.BASE_URL,
  routes
});

export default router;
