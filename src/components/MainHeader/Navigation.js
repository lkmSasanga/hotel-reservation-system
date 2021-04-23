import React from 'react';
import { useHistory } from "react-router-dom";

import classes from './Navigation.module.css';

const Navigation = (props) => {
    const history = useHistory();

    const gotoHome = () => {
        history.push('/');
      // props.onClikGoHome();

    };

    return (
        <nav className={classes.nav}>
            <ul>
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/" onClick={gotoHome}>Home</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/">About</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <a href="/">Contact</a>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <button >Sign In</button>
                    </li>
                {/*)}*/}
                {/*{props.isLoggedIn && (*/}
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                {/*)}*/}


            </ul>
        </nav>
    );
};

export default Navigation;
