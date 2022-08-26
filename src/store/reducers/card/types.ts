
export interface ICardState {
    isShow: boolean
}

export enum CardActionsEnum {
    SHOW_CARD = "SHOW_CARD",
    CLOSE_CARD = "CLOSE_CARD"
}

export interface IShowCardAction {
    type: CardActionsEnum.SHOW_CARD
    payload: boolean;
}

export interface ICloseCardAction {
    type: CardActionsEnum.CLOSE_CARD;
    payload: boolean;
}


export type CardActions = IShowCardAction | ICloseCardAction
