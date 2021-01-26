import { createApp } from './app';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  // Initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__);

  delete window.__INITIAL_STATE__;
}

router.onReady(() => {
  app.$mount('#app', true);
});
