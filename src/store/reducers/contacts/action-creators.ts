import { ContactActionsEnum, IContact, IDeleteContactAction, IEditContactAction, ISetContactAction, IUpdateContactAcion } from "./types";


export const ContactActionsCreators = {
    setContact: (contact: IContact):ISetContactAction => ({type: ContactActionsEnum.SET_CONTACT, payload: contact}),
    deleteContact: (id:number):IDeleteContactAction => ({type: ContactActionsEnum.DELETE_CONTACT, payload: id}),
    updateContact: (contact: IContact) :IUpdateContactAcion => ({type: ContactActionsEnum.UPDATE_CONTACT, payload: contact}),
    editStatus: (flag: boolean): IEditContactAction => ({type: ContactActionsEnum.EDIT_CONTACT, payload: flag})
}
