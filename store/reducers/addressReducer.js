import { addressActiontypes } from '../actions/addressActions/addressActionTypes'

const initialAddressState = {
  addresses: [],
  currentAddress: null,
  openModal: false,
  yandexKey: '',
}

const addressReducer = (state = initialAddressState, action) => {
  const { payload } = action
  switch (action.type) {
    case addressActiontypes.ADD_ADDRESS: {
      const address = state.addresses.find(
        (item) => item.address === payload.address && item.geo === payload.geo
      )
      if (address) {
        return {
          ...state,
          currentAddress: payload,
        }
      } else {
        return {
          ...state,
          addresses: [payload, ...state.addresses],
          currentAddress: payload,
        }
      }
    }
    case addressActiontypes.SET_CURRENT_ADDRESS: {
      return {
        ...state,
        currentAddress: payload,
      }
    }
    case addressActiontypes.SET_YANDEX_KEY: {
      return {
        ...state,
        yandexKey: payload,
      }
    }
    case addressActiontypes.OPEN_MODAL: {
      return {
        ...state,
        openModal: !state.openModal,
      }
    }
    case addressActiontypes.SET_ADDRESSES: {
      return {
        ...state,
        addresses: payload,
      }
    }
    default:
      return state
  }
}

export default addressReducer
