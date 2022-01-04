import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import coinReducers from "./coinReducers";
import loggedInReducer from "./isLoggedIn"
import walletReducer from "./walletReducer";


export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['wallet']
}

export const rootReducer = combineReducers({
    coins: coinReducers,
    loggedIn: loggedInReducer,
    wallet: walletReducer
})

// export default combineReducers({
//     coins: coinReducers,
//     loggedIn: loggedInReducer,
//     wallet: walletReducer
// })

export default persistReducer(persistConfig, rootReducer)