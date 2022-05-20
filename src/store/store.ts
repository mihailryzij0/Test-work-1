import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
