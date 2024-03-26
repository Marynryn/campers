import { configureStore } from '@reduxjs/toolkit';

import { advertsReducer } from './advertsreducer';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import modalReducer from './modalreducer';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
