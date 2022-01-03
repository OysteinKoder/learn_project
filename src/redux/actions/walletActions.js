import { store } from "../store"
import { BUY_BTC, SELL_BTC, BUY_ETH, DATA_ERROR } from "../types"

export const buyBtc = () => {
    return (
        {
            type: BUY_BTC,
            payload: store.getState().coins.coins[1].price_usd
        }
        // payload: store.getState().coins.coins[0].price_usd}
    )
}

export const sellBtc = () => {
    return (
        {
            type: SELL_BTC,
            payload: store.getState().coins.coins[1].price_usd
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

// export const sellBtc => () => async dispatch => {
//     try {
//         const res = await store.getState.coins.c
//     }
// }

// export const buyBtc = () => async dispatch => {
//     try {
//         const res = await store.getState().coins.coins.data[9].price_usd
//         dispatch({
//             type: BUY_BTC,
//             payload: res
//         })
//     }
//     catch (e) {
//         dispatch({
//             type: DATA_ERROR,
//             payload: console.log(e)
//         })
//     }
// }