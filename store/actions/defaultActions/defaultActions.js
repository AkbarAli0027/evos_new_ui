import { defaultActionTypes } from './defaultActionTypes'

export const toggleOrderNotification = () => (dispatch) => {
  dispatch({
    type: defaultActionTypes.TOGGLE_ORDER_NOTIFICATION,
    payload: true,
  })
  setInterval(() => {
    dispatch({
      type: defaultActionTypes.TOGGLE_ORDER_NOTIFICATION,
      payload: false,
    })
  }, 5000)
}
