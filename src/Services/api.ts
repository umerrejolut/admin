import { ChangeNewPasswordData, SignUpData } from '@/Common/interface';
import { API_ROUTES } from '@/Constants/apiRoutes';
// import  axios  from 'axios';
import  Axios  from 'axios';

// export const header = {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// };

const axios = Axios.create();

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    // if (token) {
      config.withCredentials = true;
      config.headers.Authorization = `Bearer ${token}`;
    // }
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["ngrok-skip-browser-warning"] = "69420";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const SIGNUP = async (body: SignUpData) =>
  await axios.post(API_ROUTES.SIGNUP, body);
export const GET_POSTS = async () =>
  await axios.get('https://jsonplaceholder.typicode.com/posts');

export const LOGIN = async (body: SignUpData) => {
  return await axios.post(API_ROUTES.LOGIN, body);
}

export const MATRIX = async () => {
  return await axios.get(API_ROUTES.MATRIX);
}

export const CHANGE_PASSWORD = async (body: ChangeNewPasswordData) => {
  return await axios.put(API_ROUTES.CHANGE_PASSWORD, body);
}
