import types from '@_/vuex-state/types';
import * as networkService from '@_/network';

const actions = {
  setIsAuthenticatedAction({ commit }, isUserAuthenticated) {
    commit(types.SET_IS_AUTHENTICATED, isUserAuthenticated);
  },

  async loginAction({ dispatch }, credentials) {
    const { username, password } = credentials;
    try {
      const authResponse = await networkService.login({ username, password });
      if (window) {
        window.localStorage.setItem('token', authResponse.token);
        window.localStorage.setItem('tokenExpiration', authResponse.expiration);
      }
      dispatch('setIsAuthenticatedAction', true);
    } catch (error) {
      console.error(`ERROR HERE:: ${error.message}`);
      if (window) {
        window.alert("Couldn't login");
      }
    }
  }
};

export default actions;
