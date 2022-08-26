import { IContact } from "../contacts/types";
import { CurrentContactdActionsEnum, ISentCurrentContactAction } from "./types";


export const CurrentContactActionsCreators = {
    sentCurrentContact: (contact:IContact):ISentCurrentContactAction => ({type: CurrentContactdActionsEnum.SENT_CURRENT_CONTACT, payload: contact}),
}
