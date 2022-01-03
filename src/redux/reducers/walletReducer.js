import { 
    BUY_BTC,
    SELL_BTC 
} from "../types";

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
            default: return state
    }
}


// USD: id "518"
// BTC: id "90"
// ETH: id "80"
// doge: id "2"
// BNB: id "2710"