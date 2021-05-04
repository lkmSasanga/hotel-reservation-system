import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './SANavigation.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const SANavigation = () => {
    const history = useHistory();

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

export default SANavigation;
