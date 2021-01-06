import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
import 'bulma';

// Vue.config.productionTip = false;

Vue.config.devtools = true;

const app = new Vue({
  // render: (h) => h(AppLayout),
  ...AppLayout,
});

export { app };
