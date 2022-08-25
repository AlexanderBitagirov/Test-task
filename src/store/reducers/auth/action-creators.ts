import axios from "axios";
import { AppDispatch } from "../..";
import { AuthActionsEnum, ISetAuthAction, ISetErrorAcions, ISetUserAction, IUser } from "./types";

export const AuthActionsCreators = {
    setUser: (user: IUser):ISetUserAction => ({type:AuthActionsEnum.SET_USER, payload: user}),
    setAuth: (auth: boolean):ISetAuthAction => ({type:AuthActionsEnum.SET_AUTH, payload: auth}),
    setError: (payload: string):ISetErrorAcions => ({type: AuthActionsEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get<IUser[]>('/users.json');
            const currentUser = response.data.find(user => 
                user.username === username && 
                user.password === password);
            
            if(currentUser) {
                localStorage.setItem("auth", "true");
                localStorage.setItem("username", currentUser.username);
                dispatch(AuthActionsCreators.setAuth(true));
                dispatch(AuthActionsCreators.setUser(currentUser));
            } else {
                dispatch(AuthActionsCreators.setError("Некорректный логин или пароль"));
            }
        } catch (error) {
            dispatch(AuthActionsCreators.setError('Ошибка'));
        }
    },
    logout: () => async(dispatch: AppDispatch) => {
            localStorage.removeItem("auth");
            localStorage.removeItem("username");
            dispatch(AuthActionsCreators.setUser({} as IUser));
            dispatch(AuthActionsCreators.setAuth(false));
    }
}