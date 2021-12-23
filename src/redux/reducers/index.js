import { combineReducers } from "redux";
import coinReducers from "./coinReducers";
import loggedInReducer from "./isLoggedIn"

export default combineReducers({
    coins: coinReducers,
    loggedIn: loggedInReducer
})