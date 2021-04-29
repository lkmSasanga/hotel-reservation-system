import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './SANavigation.module.css';

const SANavigation = () => {
    const history = useHistory();

    const gotoContact = () => {
        history.push('/contact');
    };

    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        history.push("/login");
    };

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="/contact" onClick={gotoContact}>Contact</a>
                </li>
                <li>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default SANavigation;
