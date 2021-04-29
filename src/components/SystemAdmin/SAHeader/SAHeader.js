import React from 'react';

import classes from './SAHeader.module.css';
import Logo from "../../Logo/Logo";
import SANavigation from "./SANavigation";

const SAHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <Logo/>
            <SANavigation/>
        </header>
    );
};

export default SAHeader;
