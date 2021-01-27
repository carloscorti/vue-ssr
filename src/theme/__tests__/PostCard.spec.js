import { mount } from '@vue/test-utils';
import Header from '../PostCard.vue';

const testPost = {
  id: 0,
  title: { rendered: 'this is a test post' },
  content: { rendered: 'test post content' },
  rest_api_enabler: { Link: '/#' }
};

describe('Header', () => {
  it('loads post prop correctly', () => {
    const wrapper = mount(Header, {
      propsData: {
        post: testPost
      }
    });
    expect(wrapper.props().post).toBe(testPost);
  });
});
