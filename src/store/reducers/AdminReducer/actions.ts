import { AppThunk } from "../..";
import { LOGOUT_ADMIN, ROLE_ADMIN } from "../../types"

export const logout = (payload: boolean) => {
    return {
        type: LOGOUT_ADMIN,
        payload: payload
    }
};    
export const admin = (payload: boolean) => {
    return {
        type: ROLE_ADMIN,
        payload: payload
    }
};

export const Adminlogin = (): AppThunk => dispatch => {
    dispatch(logout(false))
    dispatch(admin(true))
} 
export const AdminLogout = (): AppThunk => dispatch => {
    dispatch(logout(true))
    dispatch(admin(false))
} 