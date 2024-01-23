import axios from 'axios';
import { Dispatch } from "redux";
import { Item } from '../../models/product';


export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

export const fetchProductsRequested = () => ({
  type: FETCH_PRODUCTS_REQUESTED,
});

export const fetchProductsSuccess = (products: Item[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailed = (errorMessage: string) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: errorMessage,
});

// Thunk Action Creator
export const fetchProducts = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProductsRequested());
      let res = await axios.get(`https://fakestoreapi.com/products/`);
      dispatch(fetchProductsSuccess(res.data));
    } catch (err: any) {
      dispatch(fetchProductsFailed(err.message));
    }
  };
};