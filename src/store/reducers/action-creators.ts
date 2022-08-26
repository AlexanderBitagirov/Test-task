import { AuthActionsCreators } from "./auth/action-creators";
import { CardActionsCreators } from "./card/action-creators";
import { ContactActionsCreators } from "./contacts/action-creators";
import { CurrentContactActionsCreators } from "./current/action-creators";

export const AllActionCreators = {
    ...AuthActionsCreators,
    ...ContactActionsCreators,
    ...CardActionsCreators,
    ...CurrentContactActionsCreators
}