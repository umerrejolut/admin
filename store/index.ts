import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authToken from './authToken';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthToken'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    AuthToken: authToken,
    // Add other reducers if needed
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
