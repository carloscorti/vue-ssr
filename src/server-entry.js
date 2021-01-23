// import { app, router, store } from './app';

// export default context => {
//   console.log(context);
//   router.push(context.url);
//   return new Promise((resolve, reject) => {
//     // set server-side router's location

//     // wait until router has resolved possible async components and hooks
//     router.onReady(() => {
//       const matchedComponents = router.getMatchedComponents();
//       // console.log(matchedComponents);
//       // no matched routes, reject with 404
//       if (!matchedComponents.length) {
//         return reject({ code: 404 });
//       }

//       matchedComponents.map(component => {
//         if (component.asyncData) {
//           return component.asyncData(store, router.currentRoute).then(() => {
//             context.initialState = store.state;
//             console.log(context.initialState.postsModule.posts);
//             resolve(app);
//           });
//         }
//         resolve(app);
//       });

//       // the Promise should resolve to the app instance so it can be rendered
//     }, reject);
//   });
//   // return app;
// };

import { createApp } from './app';

export default context => {
  const { app, router, store } = createApp();
  // console.log(context);
  return new Promise((resolve, reject) => {
    router.push(context.url);

    router.onReady(() => {
      context.rendered = () => {
        context.state = store.state;
        console.log(context.state);
      };

      resolve(app);
    }, reject);
  });
};
