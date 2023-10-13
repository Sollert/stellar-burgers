import {Navigate, useLocation} from 'react-router-dom'
import {useAppSelector} from "../../services/hooks/hooks";
import {LocationState, ProtectedRouteProps} from "../../services/types/types";

export default function ProtectedRoute({children, anonymous = false}: ProtectedRouteProps) {
  const isAuth = useAppSelector(store => store.user.isAuth)
  const location: LocationState = useLocation()

  const from = location.state?.from?.pathname || '/'

  if (anonymous && isAuth) {
    return <Navigate to={from}/>
  }

  if (!anonymous && !isAuth) {
    return <Navigate to='/login' state={{from: location}}/>
  }

  return <>{children}</>
}
