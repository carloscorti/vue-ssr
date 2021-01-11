import Vue from 'vue';
import VueRouter from 'vue-router';

// import PageNotFound from '@_/theme/page-not-found.vue';
import PostList from '@_/theme/PostList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'post-list',
    // component: () =>
    //   import(
    //     /* webpackChunkName: "bundle.posts-list" */ '@_/theme/PostList.vue'
    //   )
    component: PostList
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
  hash: false,
  // base: process.env.BASE_URL,
  routes
});

export default router;
