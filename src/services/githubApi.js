import axios from 'axios';
import parseLink from 'parse-link-header';

const GITHUB_API_URL = 'https://api.github.com/';

axios.defaults.baseURL = GITHUB_API_URL;

export const getUsers = async ({ since = 0, perPage } = {}) => {
  const response = await axios({
    method: 'GET',
    url: '/users',
    params: {
      per_page: perPage,
      since,
    },
  });

  const { data } = response;
  const links = parseLink(response.headers.link);
  const hasMore = Boolean(links.next);
  return { data, hasMore };
};

export const getUser = async (username) => {
  const response = await axios({
    method: 'GET',
    url: `/users/${username}`,
  });
  return response.data;
};
