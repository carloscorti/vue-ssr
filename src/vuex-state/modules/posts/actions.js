import types from './types';
import * as networkService from '@_/network';

const errorPost = [
  {
    id: 0,
    title: { rendered: "Opss can't recognize that" },
    content: { rendered: 'Please select one tag from nav bar' },
    rest_api_enabler: { Link: '/#' }
  }
];

const actions = {
  async fetchPosts({ commit }, id) {
    let postsUpdate;
    switch (id) {
      case 'movile':
        postsUpdate = await networkService.getPosts(11);
        break;
      case 'front-end':
        postsUpdate = await networkService.getPosts(2);
        break;
      default:
        postsUpdate = errorPost;
    }
    commit(types.GET_POSTS, postsUpdate);
  }
};

export default actions;
