import React, {useEffect, useState} from 'react';
import moment from "moment";

import classes from './ViewBookings.module.css';
// import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import HOHeader from "./HOHeader/HOHeader";
import Background from "../../assets/bg2.png";

const ViewBookings = () => {
    const [bookingDetails, setBookingDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);

    moment().format();

    useEffect(() => {
        setShowSpinner(true);

        fetch(`http://localhost:5000/api/hotel_bookings/${encodeURIComponent(localStorage.getItem('id'))}`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {

                    setShowSpinner(false);
                    setBookingDetails(json.data)
                } else {
                    console.log('Error Occurred');
                }
            })

    },[]);

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
                <h1 className={classes.heading}>Up coming Bookings</h1>
                <p className={classes.subHeading}>Thank you for choosing our booking service.</p>
                {bookingDetails &&
                <div className={classes.row}>

                    {bookingDetails.map((booking) =>
                        <div key={booking._id}>
                            <Card classname={classes.cardBody} >
                                <div className={classes.oneTown} >
                                    <p className={classes.header} >{booking.hotel_name}</p>
                                    <p className={classes.content}>Checkin Date : {moment(booking.checkin_date).format('YYYY-mm-dd')}</p>
                                    <p className={classes.content}>Checkout Date : {moment(booking.checkout_date).format('YYYY-mm-dd')}</p>
                                    <p className={classes.content}>People count : {booking.people_count}</p>
                                    {booking.payment ?
                                        <p className={classes.content}>Payment : Completed</p>
                                        : <p className={classes.content}>Payment : Pending</p>
                                    }
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
                }

                {showSpinner && <Spinner/>}
            </section>

        </div>
    );
}

export default ViewBookings;
