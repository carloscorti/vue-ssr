import axios from 'axios';

axios.defaults.baseURL = 'https://api.fullstackweekly.com/';

axios.interceptors.request.use(config => {
  if (typeof window !== 'undefined' && window.localStorage.getItem('token')) {
    config.headers = {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    };
    return config;
  }
  return config;
});

const getPosts = async categoryId => {
  try {
    const resp = await axios.get(
      `wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`
    );
    return resp.data;
  } catch (error) {
    console.error(`ERROR HERE at network.getPosts:: ${error.message}`);
    return [
      {
        id: 0,
        title: { rendered: 'Opps, too busy rigth now from getPosts' },
        content: { rendered: 'Please try leater' },
        rest_api_enabler: { Link: '/#' }
      }
    ];
  }
};

const getProfile = async () => {
  try {
    const resp = await axios.get('/services/profile.php', {
      // headers: {
      //   Authorization: `Bearer ${window.localStorage.getItem('token')}`
      // }
    });
    return resp.data;
  } catch (error) {
    console.error(`ERROR HERE:: ${error.message}`);
    return error.status;
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

export { getPosts, login, getProfile };
