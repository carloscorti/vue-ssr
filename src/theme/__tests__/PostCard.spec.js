import { mount, shallowMount } from '@vue/test-utils';
import PostCard from '../PostCard.vue';

const testPost = {
  id: 0,
  title: { rendered: 'this is a test post' },
  content: { rendered: 'test post content' },
  rest_api_enabler: { Link: '/#' }
};

describe('PostCard', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(PostCard, {
      propsData: {
        post: testPost
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('loads post prop correctly', () => {
    const wrapper = mount(PostCard, {
      propsData: {
        post: testPost
      }
    });
    expect(wrapper.props().post).toBe(testPost);
  });
});
