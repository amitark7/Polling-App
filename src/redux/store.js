import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducer/AuthReducer";
import pollReducer from "./reducer/pollReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    poll: pollReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
