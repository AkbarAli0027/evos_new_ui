import { orderActionTypes } from './orderActionTypes'

export const setOrderNumber = (number) => (dispatch) => {
  dispatch({
    type: orderActionTypes.SET_ORDER_NUMBER,
    number: number,
  })
}
