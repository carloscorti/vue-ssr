import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
import { createRouter } from './router';
import { createStore } from './vuex-state';
import './styles/index.scss';

if (typeof window !== 'undefined') {
  console.log('on browser');
  Vue.config.devtools = true;
}

const createApp = () => {
  const router = createRouter();

  const store = createStore();

  const app = new Vue({
    store,
    router,
    // render: (h) => h(AppLayout),
    ...AppLayout,
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
