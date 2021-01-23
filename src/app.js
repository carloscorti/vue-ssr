import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
// import router from './router';
import { createRouter } from './router';
// import store from './vuex-state';
import { createStore } from './vuex-state';
import './styles/index.scss';

// Vue.config.productionTip = false;

if (typeof window !== 'undefined') {
  Vue.config.devtools = true;
}

// const app = new Vue({
//   store,
//   router,
//   // render: (h) => h(AppLayout),
//   ...AppLayout
// });

// export { app, router, store };

const createApp = () => {
  const router = createRouter();

  const store = createStore();

  const app = new Vue({
    store,
    router,
    // render: (h) => h(AppLayout),
    ...AppLayout
  });
  return { app, router, store };
};

// export function createApp() {
//   const app = new Vue({
//     store,
//     router,
//     // render: (h) => h(AppLayout),
//     ...AppLayout
//   });
//   return { app, router, store };
// }
export { createApp };
