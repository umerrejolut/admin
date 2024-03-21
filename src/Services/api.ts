import { AdminImage, AirdropTable, ChangeNewPasswordData, ChangeProfilePasswordData, Detail, ParamsType, SignUpData, UpdateProfile, WalletType } from '@/Common/interface';
import { API_ROUTES } from '@/Constants/apiRoutes';
import { store } from '@/store';
// import  axios  from 'axios';
import  Axios  from 'axios';
import {isEmpty} from "underscore";

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
    // const token = localStorage.getItem('accessToken');
    const token = store.getState()?.AuthToken?.authToken
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

const queryString = (params: ParamsType) =>
  Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

// export const SUMMARY_DETAILS = async (params) => await axios.get(`${API.SUMMARY_DETAILS}?${!isEmpty(params) ? queryString(params) : ""}`,config());

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

export const AIRDROP_TRANSACTIONS = async (params: AirdropTable) => {
  return await axios.get(`${API_ROUTES.AIRDROP_TRANSACTIONS}?${!isEmpty(params) ? queryString(params) : ""}`);
}

export const SEARCH_WALLETADDRESS = async (params: WalletType) => {
  return await axios.get(`${API_ROUTES.SEARCH_WALLETADDRESS}?${!isEmpty(params) ? queryString(params) : ""}`);
}

export const ADD_AIRDROP_USER = async (body:Detail[]) => {
  return await axios.post(API_ROUTES.ADD_AIRDROP_USER, body);
}

export const PROFILE_CHANGE_PASSWORD = async (body: ChangeProfilePasswordData) => {
  return await axios.put(API_ROUTES.PROFILE_CHANGE_PASSWORD, body)
}

export const ADMIN_DETAIL = async () => {
  return await axios.get(API_ROUTES.ADMIN_DETAIL);
}

export const UPLOAD_PROFILE = async (body: AdminImage) => {
  return await axios.post(API_ROUTES.UPLOAD_PROFILE, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export const UPDATE_PROFILE = async (body:UpdateProfile) => {
  return await axios.put(API_ROUTES.UPDATE_PROFILE, body);
}