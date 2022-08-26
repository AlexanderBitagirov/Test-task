import { IContact } from "../contacts/types"
import { CurrentContactActions, CurrentContactdActionsEnum, ICurrentContact } from "./types"

const initialState: ICurrentContact = {
    data: {} as IContact,
}


export default function ContactReducer(state = initialState, action: CurrentContactActions): ICurrentContact {
    switch(action.type) {
        case CurrentContactdActionsEnum.SENT_CURRENT_CONTACT:
            return {...state, data: action.payload}
        default:
            return state
    }
}                   