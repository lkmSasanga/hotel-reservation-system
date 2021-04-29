import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './HONavigation.module.css';

const HONavigation = () => {
    const history = useHistory();

    const gotoDashboard = () => {
        history.push('/owner_dashboard');
    };
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
                    <a href="/owner_dashboard" onClick={gotoDashboard}>Dashboard</a>
                </li>
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

export default HONavigation;
