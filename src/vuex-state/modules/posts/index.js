import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
