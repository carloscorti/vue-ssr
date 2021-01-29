import { shallowMount } from '@vue/test-utils';
import Footer from '../Footer.vue';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper).toMatchSnapshot();
  });
});
