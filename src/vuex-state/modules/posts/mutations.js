import types from './types';

const mutations = {
  [types.GET_POSTS](state, postsUpdate) {
    state.posts = [...postsUpdate];
  }
};

export default mutations;
