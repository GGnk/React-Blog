import React from "react";
import './adminBar.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectAdminList} from "../../store/reducers/AdminReducer";
import {authAdmin} from "../../store/reducers/AdminReducer/actions";
import {Link} from "react-router-dom";

export const AdminBar = () => {
    const store = useSelector(selectAdminList);
    const dispatch = useDispatch();

    const adminButton = !store.logout || store.admin ?
        <>
            <button className='btn btn-float-left'>
                <Link to={'/edit'}>Добавить статью</Link>
            </button>
            <button onClick={() => dispatch(authAdmin())} className='btn btn-float-right'>Выйти из редактирования</button>
        </> :
        <button
            onClick={() => dispatch(authAdmin())}
            className='btn btn-float-right'
        >Режим редактирования</button>;
    return (
        <div className='adminBar'>
            {adminButton}
        </div>
    );
}
