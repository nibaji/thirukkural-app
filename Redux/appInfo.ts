import { createSlice } from "@reduxjs/toolkit";

const AppInfoVisibility = createSlice({
  name: "appInfoVisibility",
  initialState: {
    appInfoVisibility: <boolean>false,
  },
  reducers: {
    changeAppInfoVisibility: (state) => {
      state.appInfoVisibility = !state.appInfoVisibility;
      //console.log(state.appInfoVisibility);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAppInfoVisibility } = AppInfoVisibility.actions;

export default AppInfoVisibility.reducer;
