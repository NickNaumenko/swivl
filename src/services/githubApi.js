import axios from 'axios';
import users from './users.json';
import user from './mojombo.json';

const GITHUB_API_URL = 'https://api.github.com/';

axios.defaults.baseURL = GITHUB_API_URL;

export const getUsers = async () => Promise.resolve(users);

export const getUser = async () => Promise.resolve(user);
