import { IContact } from "../contacts/types";

export interface ICurrentContact {
   data: IContact
}

export enum CurrentContactdActionsEnum {
    SENT_CURRENT_CONTACT = "SENT_CURRENT_CONTACT",
}

export interface ISentCurrentContactAction {
    type: CurrentContactdActionsEnum.SENT_CURRENT_CONTACT
    payload: IContact;
}



export type CurrentContactActions = ISentCurrentContactAction 
