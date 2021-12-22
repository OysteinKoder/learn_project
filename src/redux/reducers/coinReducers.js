import { GET_COINS_DATA } from "../types";

const initialState = {
    coins:[],
    loading:true,
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_COINS_DATA:
        return {
            ...state,
            coins: action.payload,
            loading: false
        }
        default: return state
    }
}