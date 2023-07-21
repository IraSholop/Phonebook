import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  const isRefreshing = useSelector(state => state.user.isRefreshing);
  const shouldRedirect = !isLogIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
