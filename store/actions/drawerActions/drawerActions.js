import { drawerActionTypes } from './drawerActionTypes'

export const openCartDrawer = () => (dispatch) => {
  dispatch({
    type: drawerActionTypes.OPEN_DRAWER,
  })
}
export const closeCartDrawer = () => (dispatch) => {
  dispatch({
    type: drawerActionTypes.CLOSE_DRAWER,
  })
}
export const toggleCartDrawer = () => (dispatch) => {
  dispatch({
    type: drawerActionTypes.TOGGLE_DRAWER,
  })
}
