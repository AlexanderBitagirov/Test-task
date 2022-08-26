import { CardActionsEnum, ICloseCardAction, IShowCardAction } from "./types";


export const CardActionsCreators = {
    showCard: (isShow: boolean):IShowCardAction => ({type: CardActionsEnum.SHOW_CARD, payload: isShow}),
    closeCard: (isShow: boolean):ICloseCardAction => ({type: CardActionsEnum.CLOSE_CARD, payload: isShow})
}
