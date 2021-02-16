import axios from 'axios';
// import users from './users.json';
import userData from './mojombo.json';

const GITHUB_API_URL = 'https://api.github.com/';

axios.defaults.baseURL = GITHUB_API_URL;

// export const getUsers = async ({ page = 1, since = 0 } = {}) => {
//   console.log(since);
//   const newUsers = users.slice()
//     .map((user) => ({ ...user, id: user.id + page * users.length }));
//   return new Promise((res) => setTimeout(() => res(newUsers), 500));
// };
export const getUsers = async ({ since = 0, perPage }) => {
  const response = await axios({
    method: 'GET',
    url: '/users',
    params: {
      per_page: perPage,
      since,
    },
  });
  console.log(response);
  return response.data;
};

export const getUser = async () => Promise.resolve(userData);
