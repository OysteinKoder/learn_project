import {
    TOGGLE_LOGIN,
} from '../types'



export default function (state = false, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return !state;
        default:
            return state;
    }
}