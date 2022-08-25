import { Navigate, useLocation } from "react-router-dom";
import { RouteNames } from "../../routes";
import { useCustomSelector } from "./UseCustomSelector";

export const PublicRoute = ({children} : { children: JSX.Element}) => {
    let location = useLocation();
    
    const {isAuth} = useCustomSelector(state => state.auth);

    
    if(isAuth) {
        return <Navigate to={RouteNames.CONTACTS} state={{from: location}}/>
    }

    return children;
}