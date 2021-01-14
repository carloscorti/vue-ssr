import types from '@_/vuex-state/types';

const actions = {
  setIsAuthenticatedAction({ commit }, updatedValue) {
    commit(types.SET_IS_AUTHENTICATED, updatedValue);
  }
};

export default actions;
