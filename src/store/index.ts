import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authToken from './authToken';
import userData from './userDetail'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthToken', 'UserData'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    AuthToken: authToken,
    UserData: userData,
    // Add other reducers if needed
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const logoutRedux = () => {
  persistor.purge(); // Clear persisted data
  // Additional logout logic if needed
};