import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './CNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const CNavigation = () => {
    const history = useHistory();

    const gotoHome = () => {
        history.push('/get_towns');
    };
    const gotoBookings = () => {
        history.push('/get_bookings');
    };

    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('town');
        history.push("/login");
    };

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="/get_towns" onClick={gotoHome}>Home</a>
                </li>
                <li>
                    <a href="/get_bookings" onClick={gotoBookings}>My Bookings</a>
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

export default CNavigation;
