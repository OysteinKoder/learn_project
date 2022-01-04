import {
    BUY_BTC,
    SELL_BTC,
    BUY_ETH,
    SELL_ETH,
    BUY_DOGE,
    SELL_DOGE,
    BUY_BNB,
    SELL_BNB,
    RESET_WALLET
} from "../types";
import { initialState } from "./coinReducers";

const initialWallet = {
    USD: 1000000,
    BTC: null,
    ETH: null,
    DOGE: null,
    BNB: null,
}

export default function (state = initialWallet, action) {

    switch (action.type) {
        case BUY_BTC:
            return {
                ...state,
                BTC: state.USD / action.payload,
                USD: 0
            }
        case SELL_BTC:
            return {
                ...state,
                USD: state.BTC * action.payload,
                BTC: 0
            }
        case BUY_ETH:
            return {
                ...state,
                ETH: state.USD / action.payload,
                USD: 0
            }
        case SELL_ETH:
            return {
                ...state,
                USD: state.ETH * action.payload,
                ETH: 0
            }
        case BUY_DOGE: 
        return {
            ...state,
            DOGE: state.USD / action.payload,
            USD: 0
        }
        case SELL_DOGE: 
        return {
            ...state,
            USD: state.DOGE * action.payload,
            DOGE: 0
        }
        case BUY_BNB: 
        return{
            ...state,
            BNB: state.USD / action.payload,
            USD: 0
        }
        case SELL_BNB:
            return{
                ...state,
                USD: state.BNB * action.payload,
                BNB: 0
            }
        case RESET_WALLET: 
        return {
            ...state = initialWallet
        }
        default: return state
    }
}


// USD: id "518"
// BTC: id "90"
// ETH: id "80"
// doge: id "2"
// BNB: id "2710"