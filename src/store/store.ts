import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import userSlice from "./slices/userSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    user: userSlice,
    posts: postsSlice,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
