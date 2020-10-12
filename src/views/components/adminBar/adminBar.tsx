import React from "react";
import './adminBar.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { RootState } from "../../../store";
import { Adminlogin, AdminLogout } from "../../../store/reducers/AdminReducer/actions";

// TODO: доделать кнопки
const AdminBar = ({ logout, admin, loginAction, logoutAction }: any) => {

    const adminButton = !logout || admin ?
        <>
            <button className='btn btn-float-left'>
                <Link to={'/edit'}>Добавить статью</Link>
            </button>
            <button 
            onClick={() => logoutAction()} 
            className='btn btn-float-right'>Выйти из редактирования</button>
        </> :
        <button
            onClick={() => loginAction()}
            className='btn btn-float-right'
        >Режим редактирования</button>;
    return (
        <div className='adminBar'>
            {adminButton}
        </div>
    );
}
const mapStateToProps = (store: RootState) => ({
    logout: store.admin.logout,
    admin: store.admin.admin 
})
  
const mapDispatchToProps = (dispatch: any) => ({
    loginAction: () => dispatch(Adminlogin()),
    logoutAction: () => dispatch(AdminLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar)