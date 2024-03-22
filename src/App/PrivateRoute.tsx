// ProtectedRoute.tsx
import { store } from '@/store';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
interface PrivateRouteProps {
  Component: FC;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {
    const token = store.getState()?.AuthToken?.authToken
  return token && token !== '' ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;