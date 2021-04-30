import React from 'react';

import classes from './CHeader.module.css';
import Logo from "../../Logo/Logo";
import CNavigation from "./CNavigation";

const CHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <Logo/>
            <CNavigation/>
        </header>
    );
};

export default CHeader;
