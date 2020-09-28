import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

import { Admin } from "../../types";

const initialState: Admin = {
  logout: true,
  admin: false
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {

  },
});

export const {  } = AdminSlice.actions;
export const selectAdminList = (state: RootState) => state.admin;
export default AdminSlice.reducer;

