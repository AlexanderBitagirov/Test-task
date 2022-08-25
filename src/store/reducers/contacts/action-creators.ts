import { ContactActionsEnum, IContact, IDeleteContactAction, ISetContactAction } from "./types";


export const ContactActionsCreators = {
    setContact: (contact: IContact):ISetContactAction => ({type: ContactActionsEnum.SET_CONTACT, payload: contact}),
    deleteContact: (id:number):IDeleteContactAction => ({type: ContactActionsEnum.DELETE_CONTACT, payload: id})
}
