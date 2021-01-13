import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  // heroes: []
  isAuthenticated: false
};

const getters = {
  // getHeroById: state => id => state.heroes.find(hero => hero.id === id)
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});
