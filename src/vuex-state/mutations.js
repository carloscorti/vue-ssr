import types from '@_/vuex-state/types';

const mutations = {
  [types.SET_IS_AUTHENTICATED](state, updatedValue) {
    state.isAuthenticated = updatedValue;
  },

  [types.GET_PROFILE](state, profile) {
    state.profile = { ...profile };
  },

  [types.CLEAN_PROFILE](state) {
    state.profile = {};
  }
};

export default mutations;
