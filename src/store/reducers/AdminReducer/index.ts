import {Admin, AdminActionTypes, LOGOUT_ADMIN, ROLE_ADMIN} from "../../types";

const initialState: Admin = {
  logout: true,
  admin: false,
};


export function AdminReducer (
  state = initialState,
  action: AdminActionTypes
) {
  switch (action.type) {
    case LOGOUT_ADMIN:
      state.logout = action.payload
      return {...state};
    case ROLE_ADMIN:
      state.admin = action.payload
      return {...state};
    default:
      return state
  }
}