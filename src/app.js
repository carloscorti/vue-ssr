import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
import router from './router';
import 'bulma';

// Vue.config.productionTip = false;

Vue.config.devtools = true;

const app = new Vue({
  router,
  // render: (h) => h(AppLayout),
  ...AppLayout
});

export { app, router };
