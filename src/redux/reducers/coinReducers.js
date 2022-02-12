import {
    GET_COINS_DATA,
    GET_USD_DATA,
    GET_BTC_DATA,
    GET_ETH_DATA,
    GET_DOGE_DATA,
    GET_BNB_DATA,
    CLEAN_STATE
} from "../types";


let loadingState = false;

export const initialState = {
    coins: [],
    usd: [],
    btc: [],
    eth: [],
    doge: [],
    bnb: [],
    loading: loadingState,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COINS_DATA:
            return {
                ...state,
                coins: [state.coins, action.payload]
            }
        case GET_BTC_DATA:
            return {
                ...state,
                btc: state.btc.concat(action.payload)
            }
        case GET_USD_DATA:
            return {
                ...state,
                usd: state.usd.concat(action.payload),
                loading: !loadingState
            }
        case GET_ETH_DATA:
            return {
                ...state,
                eth: state.eth.concat(action.payload),
                loading: !loadingState
            }

        case GET_DOGE_DATA:
            return {
                ...state,
                doge: state.doge.concat(action.payload),
                loading: !loadingState
            }
        case GET_BNB_DATA:
            return {
                ...state,
                bnb: state.bnb.concat(action.payload),
                loading: !loadingState
            }
        case CLEAN_STATE:
            return initialState

        default: return state
    }
}