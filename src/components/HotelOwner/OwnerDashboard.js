import React from 'react';
import HOHeader from "./HOHeader/HOHeader";

import classes from './OwnerDashboard.module.css';
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";
import Background from "../../assets/bg2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faHotel} from "@fortawesome/free-solid-svg-icons";

const OwnerDashboard = () => {
    const history = useHistory();

    const loadHotelAddingForm  = () => {
        history.push("/add_hotel");
    };

    const loadBookings = () => {
        history.push("/hotel_bookings");
    };
    const loadGetHotels = () => {
        history.push("/get_my_hotels");
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
                        <h1 className={classes.title}
                            onClick={loadHotelAddingForm}>
                            {<FontAwesomeIcon icon={faHotel} /> } &nbsp; Add a Hotel</h1>
                    </Card>
                </div>
                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadBookings}>
                            {<FontAwesomeIcon icon={faBookmark}/>} &nbsp; Bookings</h1>
                    </Card>
                </div>
                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadGetHotels}>
                            {<FontAwesomeIcon icon={faHotel}/>} &nbsp; Get Hotels</h1>
                    </Card>
                </div>

            </section>
        </div>
    );
}

export default OwnerDashboard;
