import React from "react";

import classes from './Properties.module.css';
import MainHeader from "../MainHeader/MainHeader";

const Properties = (props) => {

return (
    <div>
        <MainHeader/>
        <h1 className={classes.heading}>Properties Page</h1>
    </div>
)

};

export default Properties;
