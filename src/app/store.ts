import { configureStore } from '@reduxjs/toolkit';
import statesReducer from '../features/states/statesSlice';
import districtsReducer from '../features/states/districtsSlice'
import { apiSlice } from '../features/StatesApi/statesApiSlice';

export const store = configureStore({
  reducer: {
    states: statesReducer,
    districts: districtsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
}); 

export type AppDispach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
