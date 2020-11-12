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
                    <ul class="nav-mobile">
                        <li><a><Link to="/">Dashboard</Link></a></li>
                        <li><a><Link to="/signup">Signup</Link></a></li>
                        <li><a><Link to="/login">Login</Link></a></li>
                        <li><a><Link to="/profile">Profile</Link></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;