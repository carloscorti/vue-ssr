import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Header from '../Header.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('Header', () => {
  let state;
  let getters;
  let store;
  let router;

  beforeEach(() => {
    state = {
      isAuthenticated: false
    };

    getters = {
      isAuthenticated: state => state.isAuthenticated
    };

    store = new Vuex.Store({
      state,
      getters
    });

    router = new VueRouter();
  });

  it('renders correctly with isAuthenticated false', () => {
    const wrapper = shallowMount(Header, { router, store, localVue });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with isAuthenticated true', async () => {
    const wrapper = shallowMount(Header, { router, store, localVue });
    wrapper.vm.$store.state.isAuthenticated = true;
    await localVue.nextTick();
    expect(wrapper.find('span').text()).toBe('Logout');
  });
});
