import Vue from "vue";

const app = new Vue({
  data: {
    hello: "hello vue",
  },

  template: '<div id="app">{{hello}}</div>',
});

export { app };
