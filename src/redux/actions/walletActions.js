import { store } from "../store"
import { BUY_BTC, DATA_ERROR } from "../types"

export const getBtcValue = () => async dispatch => {
    try {
        const res = await store.getState().coins.coins.data[0].price_usd
        dispatch({
            type: BUY_BTC,
            payload: res
        })
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}