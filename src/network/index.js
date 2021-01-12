import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com/';

const getPosts = async categoryId => {
  const resp = await axios.get(
    `wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`
  );
  return resp.data;
};

export { getPosts };
