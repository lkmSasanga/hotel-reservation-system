import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './HONavigation.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const HONavigation = () => {
    const history = useHistory();

    const gotoDashboard = () => {
        history.push('/owner_dashboard');
    };
    // const gotoContact = () => {
    //     history.push('/contact');
    // };

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
                <li style={{color: '#ffffff'}}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +94 91 22 90 100
                </li>
                <li>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};



export default HONavigation;
