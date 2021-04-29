import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './Navigation.module.css';

const Navigation = (props) => {
    const history = useHistory();

    const gotoHome = () => {
        history.push('/home');
    };

    const gotoAbout = () => {
      history.push('/about');
    };
    const gotoContact = () => {
      history.push('/contact');
    };

    const onLogout = () => {
        localStorage.removeItem('token');
        history.push("/login");
    };

    return (
        <nav className={classes.nav}>
            <ul>
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/home" onClick={gotoHome}>Home</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/about" onClick={gotoAbout}>About</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/contact" onClick={gotoContact}>Contact</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <button >Sign In</button>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <button onClick={onLogout}>Logout</button>
                    </li>
                {/*)}*/}


            </ul>
        </nav>
    );
};

export default Navigation;
