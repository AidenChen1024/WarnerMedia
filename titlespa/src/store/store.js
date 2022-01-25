import { configureStore } from "@reduxjs/toolkit";
import Slice from "../state/Slice";

export const store = configureStore({
  reducer: {
    list: Slice,
  },
});
