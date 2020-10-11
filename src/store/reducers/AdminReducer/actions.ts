import { Admin, LOGOUT_ADMIN, ROLE_ADMIN } from "../../types"

export const logout = (payload: boolean) => {
    return {
        type: LOGOUT_ADMIN,
        payload: payload
    }
};    
export const editArticle = (payload: boolean) => {
    return {
        type: ROLE_ADMIN,
        payload: payload
    }
};