import Vue from 'vue';
import AppLayout from './theme/AppLayout.vue';
// import './style/index.scss';
import 'bulma';

const app = new Vue({
  // render: (h) => h(AppLayout),
  ...AppLayout
});

export { app };
