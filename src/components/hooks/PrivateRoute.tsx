import { Navigate, useLocation } from "react-router-dom";
import { RouteNames } from "../../routes";
import { useCustomSelector } from "./UseCustomSelector";

export const PrivateRoute = ({children} : { children: JSX.Element}) => {
    let location = useLocation();
    const {isAuth} = useCustomSelector(state => state.auth);
    
    if(!isAuth) {
        return <Navigate to={RouteNames.LOGIN} state={{from: location}}/>
    }

    return children;
}