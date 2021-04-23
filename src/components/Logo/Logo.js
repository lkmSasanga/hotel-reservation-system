import React from 'react';
import { useHistory } from "react-router-dom";


import hotelLogo from '../Media/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    const history = useHistory();

    const gotoHome = () => {
        history.push('/')
    };

    return (
        <div className={classes.Logo} style={{height: props.height}} >
            <img src={hotelLogo} alt="logo" onClick={gotoHome}/>
        </div>
    )
};

export default Logo;
