import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="card-panel col s12 light-green darken-4">
                <h1 class="center-align meddon" >The Dragon's Scroll</h1>
            </div>
            <nav class=" nav-extended grey darken-4">
                <div class="nav-wrapper">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href='/signup'>Signup</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a>Dice Roller</a></li>
                    <li><a>Maps</a></li>
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;