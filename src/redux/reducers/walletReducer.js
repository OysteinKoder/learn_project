import { BUY_BTC } from "../types";
import { SELL_BTC } from "../types";
import { store } from "../store";


const initialWallet = {
    USD: 1000,
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
                BTC: action.payload 
            }
            default: return state
    }
}


// USD: id "518"
// BTC: id "90"
// ETH: id "80"
// doge: id "2"
// BNB: id "2710"