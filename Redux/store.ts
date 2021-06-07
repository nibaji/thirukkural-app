import { configureStore } from "@reduxjs/toolkit";
import AppInfoVisibility from "./appInfo";
import kuralData from "./kuralData";

const store = configureStore({
  reducer: {
    kuralDetails: kuralData,
    appInfoVisibility: AppInfoVisibility,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
