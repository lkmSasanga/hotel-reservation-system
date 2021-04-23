import React from 'react';

import hotelLogo from '../Media/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={hotelLogo} alt="logo"/>
        </div>
    )
};

export default Logo;
