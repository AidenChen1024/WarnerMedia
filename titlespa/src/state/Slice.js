import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    getList: (state) => {
      state.loading = true;
      state.error = null;
    },

    setList: (state, action) => {
      state.loading = true;
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { getList, setList, startLoading, endLoading } = listSlice.actions;

export default listSlice.reducer;
