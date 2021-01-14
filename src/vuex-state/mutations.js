import types from '@_/vuex-state/types';

const mutations = {
  [types.SET_IS_AUTHENTICATED](state, updatedValue) {
    state.isAuthenticated = updatedValue;
  }
};

export default mutations;
