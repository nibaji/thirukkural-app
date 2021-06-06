import { configureStore } from "@reduxjs/toolkit";
import kuralData from "./kuralData";

const store = configureStore({
  reducer: {
    kuralDetails: kuralData,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
