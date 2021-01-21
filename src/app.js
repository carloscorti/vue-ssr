import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
import router from './router';
import store from './vuex-state';
import 'bulma';

// Vue.config.productionTip = false;

Vue.config.devtools = true;

const app = new Vue({
  store,
  router,
  // render: (h) => h(AppLayout),
  ...AppLayout
});

export { app, router, store };
