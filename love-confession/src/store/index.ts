import { configureStore } from '@reduxjs/toolkit';
import { weddingApi } from '../api/weddingApi';

export const store = configureStore({
  reducer: {
    [weddingApi.reducerPath]: weddingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weddingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;