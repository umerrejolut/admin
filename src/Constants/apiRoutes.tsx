const BASE_URL = import.meta.env.VITE_SERVER_URL;
console.log('BASE_URL', BASE_URL);

export const API_ROUTES = {
  SIGNUP: `${BASE_URL}/auth/signup`,
};
