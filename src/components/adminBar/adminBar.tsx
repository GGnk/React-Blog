import React from "react";
import './adminBar.scss';

export const AdminBar = () => {
    return (
        <div className='adminBar'>
            <button className='btn btn-float-left'>Добавить статью</button>
            <button className='btn btn-float-right'>Выйти из редактирования</button>
        </div>
    );
}
