import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div class="card-panel col s12 light-green darken-4">
                <Link to ="/">
                    <h1 class="center-align meddon link-text-black" >The Dragon's Scroll</h1>
                </Link>
            </div>
            <nav class="nav-extended grey darken-4">
                <div class="nav-wrapper">
                    <Link to="/">Dashboard</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/">Dice Roller</Link>
                    <Link to="/">Maps</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;