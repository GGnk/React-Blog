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

export const Adminlogin = (authentication: boolean): AppThunk => dispatch => {
    dispatch(logout(!authentication))
    dispatch(admin(authentication))
} 