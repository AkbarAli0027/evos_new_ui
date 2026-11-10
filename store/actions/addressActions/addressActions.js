import { addressActiontypes } from './addressActionTypes'

export const addAddress = (payload) => (dispatch) => {
  dispatch({
    type: addressActiontypes.ADD_ADDRESS,
    payload,
  })
}

export const setCurrentAddress = (payload) => (dispatch) => {
  dispatch({
    type: addressActiontypes.SET_CURRENT_ADDRESS,
    payload,
  })
}

export const setAddresses = (payload) => (dispatch) => {
  dispatch({
    type: addressActiontypes.SET_ADDRESSES,
    payload,
  })
}

export const setYandexKey = (payload) => (dispatch) => {
  dispatch({
    type: addressActiontypes.SET_YANDEX_KEY,
    payload,
  })
}

export const setOpenAddress = () => (dispatch) => {
  dispatch({
    type: addressActiontypes.OPEN_MODAL,
  })
}
