import { defaultActionTypes } from '../actions/defaultActions/defaultActionTypes'

const initialState = {
  isOrderNotification: false,
}

const defaultReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case defaultActionTypes.TOGGLE_ORDER_NOTIFICATION:
      return {
        ...state,
        isOrderNotification: payload,
      }

    default:
      return state
  }
}

export default defaultReducer
