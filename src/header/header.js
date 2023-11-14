import React from 'react';
import './header.scss'
import logo from './logo (1).png'

const Header = () => {
    return (
        <header className='header'>
        <div className="header__container container">
            <div className="header__menu">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                    <h3>Marico</h3>
                </div>
                <ul className="header__lists">
                    <li>Use Cases</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Blog</li>

                </ul>
                <div className="header__auth">
                    <p>Login</p>
                    <button>Sing Up</button>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header;