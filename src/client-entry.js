// import { app, router, store } from './app';
import { createApp } from './app';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  // console.log(store);
  // store.replaceState(window.__INITIAL_STATE__);
  store.replaceState(window.__INITIAL_STATE__);

  delete window.__INITIAL_STATE__;

  console.log(store);
}

router.onReady(() => {
  app.$mount('#app', true);
});
