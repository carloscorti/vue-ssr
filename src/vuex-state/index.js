import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

import postsModule from './modules/posts';

Vue.use(Vuex);

const state = {
  isAuthenticated: false,
  profile: {}
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  profile: state => state.profile
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { postsModule },
  state,
  mutations,
  actions,
  getters
});
