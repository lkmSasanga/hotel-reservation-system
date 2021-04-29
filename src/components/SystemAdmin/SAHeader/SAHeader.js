import React from 'react';

import classes from './SAHeader.module.css';
import Logo from "../../Logo/Logo";

const SAHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <Logo/>
            <SAHeader/>
        </header>
    );
};

export default SAHeader;
