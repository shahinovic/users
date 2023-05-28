import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataReducer from "../features/dataSlice";
import selectedUserReducer from "../features/selectedUserSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    selectedUser: selectedUserReducer,
  },
  middleware: [thunk],
});
