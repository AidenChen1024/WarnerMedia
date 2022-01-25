import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "../state/Slice";

export const store = configureStore({
  reducer: {
    list: ListSlice,
  },
});
