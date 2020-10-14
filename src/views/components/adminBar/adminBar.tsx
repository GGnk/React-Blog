import React, { useEffect } from "react";
import './adminBar.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { RootState } from "../../../store";
import { Adminlogin } from "../../../store/reducers/AdminReducer/actions";
import store from 'store';

const AdminBar = ({ logout, admin, loginAction }: any) => {
    const cacheAdmin = store.get('admin');
    const cacheLogout = store.get('logout');

    useEffect(() => {
        loginAction(!cacheLogout && cacheAdmin)
    }, []);

    useEffect(() => {
        store.set('admin', admin)
        store.set('logout', logout)
    }, [admin, logout]);
    
    const adminButton = !logout && admin ?
        <>
            <button className='btn btn_float_left btn_green'>
                <Link to={'/edit'}>Добавить статью</Link>
            </button>
            <button 
            onClick={() => loginAction(false)} 
            className='btn btn_float_right btn_black'>Выйти из редактирования</button>
        </> :
        <button
            onClick={() => loginAction(true)}
            className='btn btn_float_right btn_blue'
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
    loginAction: (login: boolean) => dispatch(Adminlogin(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar)