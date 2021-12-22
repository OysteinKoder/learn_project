import { GET_COINS_DATA, COINS_DATA_ERROR } from "../types";
import axios from 'axios';

export const getUsers = () => async dispatch => {
    try{
        const res = await axios.get('https://api.coinlore.net/api/tickers/')
        dispatch({
            type: GET_COINS_DATA,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: COINS_DATA_ERROR,
            payload: console.log(e)
        })
    }
}