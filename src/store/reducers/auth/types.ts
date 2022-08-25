
export interface IUser {
    username: string,
    password : string
}

export interface IAuthState {
    isAuth: boolean,
    user: IUser,
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_ERROR = "SET_ERROR"
}


export interface ISetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface ISetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}

export interface ISetErrorAcions {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export type AuthActions = ISetAuthAction | ISetUserAction | ISetErrorAcions


