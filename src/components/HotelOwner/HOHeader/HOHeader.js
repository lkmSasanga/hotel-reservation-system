import React from 'react';

import classes from './HOHeader.module.css';
import Logo from "../../Logo/Logo";
import HONavigation from "./HONavigation";

const HOHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <Logo/>
            <HONavigation/>
        </header>
    );
};

export default HOHeader;
