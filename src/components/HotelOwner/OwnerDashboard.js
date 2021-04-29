import React, {useState} from 'react';
import HOHeader from "./HOHeader/HOHeader";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './OwnerDashboard.module.css';
import Card from "../UI/Card/Card";
import AddHotel from "./AddHotel";
import {Redirect} from "react-router-dom";

const OwnerDashboard = () => {
    const [showHotelAddingForm, setShowHotelAddingForm] = useState(false);
    const [showBookings, setShowBookings] = useState(false);

    const loadHotelAddingForm  = () => {
        setShowHotelAddingForm(true);
    };

    const loadBookings = () => {
        setShowBookings(true);
    };

    return (
        <div className={classes.main}>
            <HOHeader/>
            <h1 className={classes.heading}>Dashboard</h1>

            <div className={classes.row}>
                <Card className={classes.cardBody}>
                {/*<FontAwesomeIcon icon={faArrowAltCircleUp}/>*/}
                <h1 className={classes.title} onClick={loadHotelAddingForm}>Add a Hotel</h1>
                </Card>
                <Card className={classes.cardBody}>
                    <h1 className={classes.title} onClick={loadBookings}>Bookings</h1>
                </Card>
            </div>
            {showHotelAddingForm &&
                <>
                    <Redirect to={"/add_hotel"}/>
                    <AddHotel/>
                </>
            }
        </div>
    );
}

export default OwnerDashboard;
