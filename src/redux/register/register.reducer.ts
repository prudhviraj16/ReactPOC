import { ADD_USER_REQUESTED } from "./register.action";

const item = localStorage.getItem("users") || "[]"
const users = (JSON.parse(item))

const initialState = {
    users: users,
}

const registerReducer = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case ADD_USER_REQUESTED:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default registerReducer

