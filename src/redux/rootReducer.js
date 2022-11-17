import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/auth-slice';
import userReduser from './User/user-slice';
import { dailyRateReducer } from './Daily-rate/daily-rate-slice';
import productReducer from './Product-search/product-search-slice.js';
const persistRegistrConfig = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};
const persistUserConfig = {
  key: 'user',
  storage,
  blacklist: ['status'],
};
const persistedUserReducer = persistReducer(persistUserConfig, userReduser);
const persistedRegistrReducer = persistReducer(
  persistRegistrConfig,
  authReducer
);
export const rootReducer = combineReducers({
  auth: persistedRegistrReducer,
  dailyRate: dailyRateReducer,
  products: productReducer,
  user: persistedUserReducer,
});
