import { AuthActions, AuthActionsEnum, IAuthState, IUser } from "./types"

const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    error: ''
}



export default function authReducer(state = initialState, action: AuthActions):IAuthState {
    switch(action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}