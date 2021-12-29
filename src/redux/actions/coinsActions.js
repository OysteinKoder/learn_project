import {
GET_COINS_DATA,
DATA_ERROR,
GET_BTC_DATA,
GET_ETH_DATA,
GET_DOGE_DATA,
GET_BNB_DATA,
GET_USD_DATA,
CLEAN_STATE,
 } from "../types";
import axios from 'axios';
import { initialState } from "../reducers/coinReducers";

export const getCoins = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coinlore.net/api/tickers/')
        dispatch({
            type: GET_COINS_DATA,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}

export const getUsd = () => async dispatch => {
    try{
        const res = await axios.get('https://api.coinlore.net/api/ticker/?id=518')
        dispatch({
            type: GET_USD_DATA,
            payload: res.data
        })
    }
    catch(e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}

export const getBtc = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coinlore.net/api/ticker/?id=90')
        dispatch({
            type: GET_BTC_DATA,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}

export const getEth = () => async dispatch => {
    try{
        const res = await axios.get('https://api.coinlore.net/api/ticker/?id=80')
        dispatch({
            type: GET_ETH_DATA,
            payload: res.data
        })
    }
    catch(e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}

export const getDoge = () => async dispatch => {
    try{
        const res = await axios.get('https://api.coinlore.net/api/ticker/?id=2')
        dispatch({
            type: GET_DOGE_DATA,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e)
        })
    }
}

export const getBnb = () => async dispatch => {
    try{
        const res = await axios.get('https://api.coinlore.net/api/ticker/?id=2710')
        dispatch({
            type: GET_BNB_DATA,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type:DATA_ERROR,
            payload:console.log(e)
        })
    }
}

export const cleanState = () => ({
    type: CLEAN_STATE,
    payload: initialState
})