import { ContactActions, ContactActionsEnum, IContactState } from "./types";

const initialState: IContactState = {
    contacts: [{
        id: 0,
        firstName: "User",
        lastName: "User",
        patronymic: "User",
    }, 
    {
        id: 1,
        firstName: "Admin",
        lastName: "Admin",
        patronymic: "Admin",
    }]
}


export default function ContactReducer(state = initialState, action: ContactActions): IContactState {
    switch(action.type) {
        case ContactActionsEnum.SET_CONTACT:
            return {...state, contacts: [...state.contacts, action.payload]}
        case ContactActionsEnum.DELETE_CONTACT:
            let newContactList = state.contacts.filter((el)=> el.id !== action.payload)
            return {...state, contacts: newContactList}
        case ContactActionsEnum.UPDATE_CONTACT:
             return {...state, contacts: action.payload}
        default:
            return state
    }
}                   