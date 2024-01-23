import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_REQUESTED, FETCH_PRODUCTS_SUCCESS } from "./products.action";

const initialState = {
    products: [],
    error: "Please try again later"
}

const productsReducer = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUESTED:
            return {
                ...state,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                error: "Please try again later"
            }

        default:
            return state
    }
}

export default productsReducer

