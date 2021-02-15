import axios from 'axios';
import users from './users.json';
import user from './mojombo.json';

const GITHUB_API_URL = 'https://api.github.com/';

axios.defaults.baseURL = GITHUB_API_URL;

export const fetchUsers = async () => Promise.resolve(users);

export const fetchUser = async () => Promise.resolve(user);
