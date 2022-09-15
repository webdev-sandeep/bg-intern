import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("data/getUsers", async () => {
  return fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((val) => val.data);
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    list: [],
    status: null,
  },

  reducers: {
    sortList: (state, action) => {
      state.list = [...action.payload];
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { sortList } = dataSlice.actions;

export const selectData = (state) => state.data.list;

export default dataSlice.reducer;
