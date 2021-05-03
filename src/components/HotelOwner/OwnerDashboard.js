import React, {useState} from 'react';
import HOHeader from "./HOHeader/HOHeader";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './OwnerDashboard.module.css';
import Card from "../UI/Card/Card";
import AddHotel from "./AddHotel";
import {Redirect, useHistory} from "react-router-dom";
import ViewBookings from "./ViewBookings";
import Background from "../../assets/bg2.png";

const OwnerDashboard = () => {
    const history = useHistory();

    const loadHotelAddingForm  = () => {
        history.push("/add_hotel");
    };

    const loadBookings = () => {
        history.push("/hotel_bookings");
    };

    let sectionStyle = {
        marginTop: -18,
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={classes.main}>
            <section style={ sectionStyle }>
                <HOHeader/>

                <h1 className={classes.heading}>Dashboard</h1>
                <p className={classes.subHeading}>Hey, Welcome to Board!</p>

                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        {/*<FontAwesomeIcon icon={faArrowAltCircleUp}/>*/}
                        <h1 className={classes.title} onClick={loadHotelAddingForm}>Add a Hotel</h1>
                    </Card>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title} onClick={loadBookings}>Bookings</h1>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default OwnerDashboard;
