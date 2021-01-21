import types from '@_/vuex-state/types';
import * as networkService from '@_/network';

const actions = {
  setIsAuthenticatedAction({ commit }, isUserAuthenticated) {
    commit(types.SET_IS_AUTHENTICATED, isUserAuthenticated);
  },

  async setProfileAction({ commit }) {
    const profile = await networkService.getProfile();
    commit(types.GET_PROFILE, profile);
  },

  async loginAction({ dispatch }, credentials) {
    const { username, password } = credentials;
    try {
      const authResponse = await networkService.login({ username, password });
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', authResponse.token);
        window.localStorage.setItem('tokenExpiration', authResponse.expiration);
      }
      dispatch('setIsAuthenticatedAction', true);
      dispatch('setProfileAction');
    } catch (error) {
      console.error(
        `ERROR HERE at vuex-state.actions.loginAction:: ${error.message}`
      );
      if (typeof window !== 'undefined') {
        window.alert("Couldn't login");
      }
    }
  },

  logoutAction({ commit, dispatch }) {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('tokenExpiration');
    }
    dispatch('setIsAuthenticatedAction', false);
    commit(types.CLEAN_PROFILE);
  }
};

export default actions;
