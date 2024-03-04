import { SignUpData } from '@/Common/interface';
import { API_ROUTES } from '@/Constants/apiRoutes';
import axios from 'axios';

export const header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const SIGNUP = async (body: SignUpData) =>
  await axios.post(API_ROUTES.SIGNUP, body);
export const GET_POSTS = async () =>
  await axios.get('https://jsonplaceholder.typicode.com/posts');
