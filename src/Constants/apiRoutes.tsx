
const BASE_URL = import.meta.env.VITE_SERVER_URL;
// const BASE_URL = import.meta.env.REACT_APP_FRONTEND_URL;
// const BASE_URL = process.env.REACT_APP_FRONTEND_URL;

export const API_ROUTES = {
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGIN: `${BASE_URL}/admin-module/login`,
  MATRIX: `${BASE_URL}/admin-module/airdrop-matrics`,
  CHANGE_PASSWORD: `${BASE_URL}/admin-module/change-password`,
};
