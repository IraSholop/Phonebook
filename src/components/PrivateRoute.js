import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const isRefreshing = useSelector(state => state.user.isRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };