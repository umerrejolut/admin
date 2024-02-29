import { API_ROUTES } from '@/Constants/apiRoutes';
import axios from 'axios';

export const header = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const SIGNUP = async (body: any) =>
  await axios.post(API_ROUTES.SIGNUP, body);
