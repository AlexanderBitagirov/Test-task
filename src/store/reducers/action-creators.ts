import { AuthActionsCreators } from "./auth/action-creators";
import { ContactActionsCreators } from "./contacts/action-creators";

export const AllActionCreators = {
    ...AuthActionsCreators,
    ...ContactActionsCreators
}