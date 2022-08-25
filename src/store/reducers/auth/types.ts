
export interface IAuthState {
    isAuth:boolean
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH"
}


export interface ISetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export type AuthActions = ISetAuthAction