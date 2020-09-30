import { AppThunk } from "../../index";
import { Admin } from "../../types"
import  { logoutAdmin, roleAdmin } from '.'

export const authAdmin = (): AppThunk => (dispatch): void => {
    dispatch(logoutAdmin());
    dispatch(roleAdmin());
};
