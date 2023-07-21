import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/slice';
import filterSlise from './filter/slice';
import userSlice from './user/slice';
import {
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    user: persistedReducer,
    filter: filterSlise.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  })
}
});

export const persistor = persistStore(store);

