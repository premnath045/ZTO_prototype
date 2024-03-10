import { Navigate, useLocation } from 'react-router-dom';
import { isAuth } from '../utils/helperFunctions';

export default function PrivateRoute({ children }) {
  const auth = isAuth();
  const location = useLocation();

  return auth ? children : <Navigate to='/sign-in'  state={{ from: location.pathname }}/>;
}
