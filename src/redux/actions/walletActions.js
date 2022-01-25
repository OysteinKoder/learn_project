import { store } from "../store"
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
} from "../types"

export const buyBtc = () => {
    return (
        {
            type: BUY_BTC,
            payload: store.getState().coins.btc[0].price_usd
        }
        // payload: store.getState().coins.coins[0].price_usd}
    )
}

export const sellBtc = () => {
    return (
        {
            type: SELL_BTC,
            payload: store.getState().coins.btc[0].price_usd
        }
        // payload: store.getState().coins.coins[0].price_usd}
    )
}

export const buyEth = () => {
    return (
        {
            type: BUY_ETH,
            payload: store.getState().coins.coins[2].price_usd
        }
    )
}

export const sellEth = () => {
    return (
        {
            type: SELL_ETH,
            payload: store.getState().coins.coins[2].price_usd
        }
    )
}

export const buyDoge = () => {
    return (
        {
            type: BUY_DOGE,
            payload: store.getState().coins.coins[3].price_usd
        }
    )
}

export const sellDoge = () => {
    return (
        {
            type: SELL_DOGE,
            payload: store.getState().coins.coins[3].price_usd
        }
    )
}

export const buyBnb = () => {
    return (
        {
            type: BUY_BNB,
            payload: store.getState().coins.coins[4].price_usd
        }
    )
}

export const sellBnb = () => {
    return (
        {
            type: SELL_BNB,
            payload: store.getState().coins.coins[4].price_usd
        }
    )
}

export const resetWallet = () => {
    return (
        {
            type: RESET_WALLET
        }
    )
}
