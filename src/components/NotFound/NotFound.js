import React from "react";

import classes from './NotFound.module.css';

const NotFound = () => {
    return(
        <div className={classes.body}>
            <h1 className={classes.header}>404</h1>
            <p className={classes.paragraph}>Oops! Something is wrong.</p>
            <a className={classes.button} href="#" ><i className={classes.iconHome}></i> Go back in initial page, is better.</a>
            <p className={classes.spaceControl}>.</p>
        </div>
    );
};

export default NotFound;
