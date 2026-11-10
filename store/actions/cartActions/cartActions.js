import { cartActionTypes } from './cartActionTypes'

export const addToCartAction = (product) => (dispatch) => {
  dispatch({
    type: cartActionTypes.ADD_TO_CART,
    payload: product,
  })
}
export const removeFromCartAction = (product) => (dispatch) => {
  dispatch({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: product,
  })
}
export const reduceCartItemQuantityAction = (product) => (dispatch) => {
  dispatch({
    type: cartActionTypes.REDUCE_CART_ITEM_QUANTITY,
    payload: product,
  })
}
export const clearCartAction = () => ({
  type: cartActionTypes.CLEAR_CART,
})
export const setToCartAction = (product) => (dispatch) => {
  dispatch({
    type: cartActionTypes.SET_TO_CART,
    payload: product,
  })
}
