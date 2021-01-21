import { app, router, store } from './app';

export default context => {
  router.push(context.url);
  return app;
};
