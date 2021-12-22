import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers"
import { createStore, applyMiddleware } from "redux";;


const initialState= {

};

const middleware = [thunk]

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
