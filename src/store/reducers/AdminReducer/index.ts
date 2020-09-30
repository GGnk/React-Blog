import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

import {Admin, ArticleState} from "../../types";

const initialState: Admin = {
  logout: true,
  admin: false
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logoutAdmin(state: Admin): void {
      state.logout = !state.logout
    },
    roleAdmin(state: Admin): void {
      state.admin = !state.admin
    },
  },
});

export const { logoutAdmin, roleAdmin } = AdminSlice.actions;
export const selectAdminList = (state: RootState) => state.admin;
export default AdminSlice.reducer;

