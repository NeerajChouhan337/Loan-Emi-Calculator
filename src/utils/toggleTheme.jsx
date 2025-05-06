import { createSlice } from "@reduxjs/toolkit";

const toggleTheme = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleBtn: (state) => {
      state.isDark = !state.isDark;
    },
  },
});
export const { toggleBtn } = toggleTheme.actions;
export default toggleTheme.reducer;
