import { combineReducers } from "redux";
import coinReducers from "./coinReducers";

export default combineReducers({
    coins: coinReducers
})