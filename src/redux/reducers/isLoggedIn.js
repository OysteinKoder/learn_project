import {
    IS_LOGGED_IN,
    IS_LOGGED_OUT
} from '../types'



export default function (state = false, action) {
    switch(action.type) {
        case IS_LOGGED_IN:
            return !state;
            default:
                return state;
    }
}