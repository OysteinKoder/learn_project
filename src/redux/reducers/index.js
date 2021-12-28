import { combineReducers } from "redux";
import coinReducers from "./coinReducers";
import loggedInReducer from "./isLoggedIn"
import walletReducer from "./walletReducer";

export default combineReducers({
    coins: coinReducers,
    loggedIn: loggedInReducer,
    BTC_VALUE: walletReducer
})