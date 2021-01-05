import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';

const app = new Vue({
  // render: (h) => h(AppLayout),
  ...AppLayout
});

export { app };
