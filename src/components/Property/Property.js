import React from "react";

import classes from './Property.module.css';
import Card from "../UI/Card/Card";
import galle from '../Media/galle.jpg';

const Property = (props) => {

    console.log('FROM PROPERTY',props.hotelData[0].hotels.h1.name);
    console.log('FROM PROPERTY',props.hotelData[0]);
    return (
        <div>
            <h1 className={classes.heading}>Around Galle</h1>
            <div>
                <img className={classes.image} src={galle} alt="Galle Image" />
            </div>

            <Card>
                <div>content</div>
            </Card>
        </div>
    );
};

export default Property;
