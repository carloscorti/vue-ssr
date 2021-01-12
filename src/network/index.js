import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com/';

const getPosts = async categoryId => {
  try {
    const resp = await axios.get(
      `wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`
    );
    return resp.data;
  } catch (error) {
    console.error(`ERROR HERE:: ${error.message}`);
    return [
      {
        id: 0,
        title: { rendered: 'Opps, too busy rigth now' },
        content: { rendered: 'Please try leater' },
        rest_api_enabler: { Link: '/#' }
      }
    ];
  }
};

const login = async credentials => {
  try {
    const resp = await axios.post('/services/auth.php', credentials);
    return resp.data;
  } catch (error) {
    console.error(`ERROR HERE:: ${error.message}`);
    return error.status;
  }
};

export { getPosts, login };
