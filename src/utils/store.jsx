import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import toggleReducer from "./toggleTheme"

const store = configureStore({
  reducer: {
    app:appReducer,
    theme:toggleReducer,
  },
});

export default store;
