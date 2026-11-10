import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import cartReducer from './cartReducer'
import drawerReducer from './drawerReducers'
import defaultReducer from './defaultReducers'
import orderReducer from './orderReducer'
import addressReducer from './addressReducer'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'default'],
  blacklist: ['drawer'],
}

const addressPersistConfig = {
  key: 'address',
  storage,
  blacklist: ['openModal'],
}

const rootReducer = combineReducers({
  cart: cartReducer,
  drawer: drawerReducer,
  default: defaultReducer,
  order: orderReducer,
  address: persistReducer(addressPersistConfig, addressReducer),
})

export default persistReducer(rootPersistConfig, rootReducer)
