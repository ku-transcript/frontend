import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./slices/notificationSlice";
import transcriptSlice from "./slices/transcriptSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      notification: notificationSlice,
      transcript: transcriptSlice,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
