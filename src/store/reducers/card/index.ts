import { CardActions, CardActionsEnum, ICardState } from "./types"

const initialState: ICardState = {
    isShow: false,
}


export default function ContactReducer(state = initialState, action: CardActions): ICardState {
    switch(action.type) {
        case CardActionsEnum.SHOW_CARD:
            return {...state, isShow: action.payload}
        case CardActionsEnum.CLOSE_CARD:
            return {...state, isShow: action.payload}
        default:
            return state
    }
}                   