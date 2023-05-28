import { createSlice } from "@reduxjs/toolkit";

// Define the async thunk action to fetch the data

const dataSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUsers } = dataSlice.actions;

export default dataSlice.reducer;
