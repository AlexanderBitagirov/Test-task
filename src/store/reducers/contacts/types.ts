export interface IContact {
    id: number,
    firstName: string,
    lastName: string,
    patronymic: string
}


export interface IContactState {
    contacts: IContact[],
    isEdit: boolean
}


export enum ContactActionsEnum {
    SET_CONTACT = "SET_CONTACT",
    DELETE_CONTACT = "DELETE_CONTACT",
    UPDATE_CONTACT = "UPDATE_CONTACT",
    EDIT_CONTACT = "EDIT_CONTACT"
}


export interface ISetContactAction {
    type: ContactActionsEnum.SET_CONTACT;
    payload: IContact;
}

export interface IDeleteContactAction {
    type: ContactActionsEnum.DELETE_CONTACT;
    payload: number;
}

export interface IUpdateContactAcion {
    type: ContactActionsEnum.UPDATE_CONTACT;
    payload: IContact;
}

export interface IEditContactAction {
    type: ContactActionsEnum.EDIT_CONTACT
    payload: boolean
}

export type ContactActions = ISetContactAction | IDeleteContactAction | IUpdateContactAcion | IEditContactAction
