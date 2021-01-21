import { app, router, store } from './app';

export default context => {
  router.push(context.url);
  return new Promise((resolve, reject) => {
    // set server-side router's location

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      // the Promise should resolve to the app instance so it can be rendered
      resolve(app);
    }, reject);
  });
  // return app;
};
