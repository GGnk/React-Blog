import React from "react";
import './header.scss';

function Header() {
    return (
        <header>
            <input type="text" placeholder='Поиск'/>
            <div className='logo'>
                <h1>Blog</h1>
            </div>
            <div className='date'>
                <span>21/09/2020</span>
            </div>
        </header>
    );
}

export default Header;
