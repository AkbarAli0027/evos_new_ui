import { drawerActionTypes } from '../actions/drawerActions/drawerActionTypes'

const initialDrawerState = {
  isCartOpen: false,
}

const drawerReducer = (state = initialDrawerState, action) => {
  const { payload } = action
  switch (action.type) {
    case drawerActionTypes.OPEN_DRAWER:
      return {
        ...state,
        isCartOpen: true,
      }
    case drawerActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        isCartOpen: false,
      }
    case drawerActionTypes.TOGGLE_DRAWER:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }

    default:
      return state
  }
}

export default drawerReducer
