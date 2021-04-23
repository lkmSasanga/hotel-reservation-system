import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import Logo from "../Logo/Logo";

const MainHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            {/*<h1>ABC Hotel Reservation</h1>*/}
            <Logo/>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    );
};

export default MainHeader;
