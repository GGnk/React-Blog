import React from "react";
import './header.scss';

export const Header = () => {
    return (
        <header>
            <input type="text" placeholder='Поиск'/>
            <div className='logo'>
                <h1>Blog</h1>
            </div>
            <input type='date' />
        </header>
    );
}
