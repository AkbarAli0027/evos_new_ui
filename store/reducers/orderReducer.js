import { orderActionTypes } from "../actions/orderActions/orderActionTypes"

const initialState = {
  orderNumber: null,
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActionTypes.SET_ORDER_NUMBER:
      return {
        ...state,
        orderNumber: action.number,
      }

    default:
      return state
  }
}

export default orderReducer
