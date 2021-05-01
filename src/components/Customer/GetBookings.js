import React, {useEffect, useState} from 'react';
import moment from "moment";

import classes from './GetBookings.module.css';
import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";
import Button from "../UI/Button/Button";

const GetBookings = () => {
    const [loggedUserId, setLoggedUserId] = useState('');
    const [bookingDetails, setBookingDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    // const [paymentStatus, setPaymentStatus] = useState('Pending');

    // const history = useHistory();
    moment().format();

    useEffect(() => {
        setLoggedUserId(localStorage.getItem('id'));
        setShowSpinner(true);

        fetch(`http://localhost:5000/api/get_bookings?id=${encodeURIComponent(localStorage.getItem('id'))}`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    // console.log('success');
                    // console.log(typeof(json.data));
                    console.log(json.data);

                    setShowSpinner(false);
                    setBookingDetails(json.data)
                } else {
                    console.log('Error Occurred');
                }
            })

        // axios.get('http://localhost:5000/api/get_towns', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `${loggedUserToken}`,
        //     }
        // }).then(response => {
        //     let output = response.data
        //     console.log(output);
        // }).catch((error) => {
        //     console.log(error);
        // })
    },[]);

    // const townsList = () => {
    //     return townsDetails.map((town) => <li key={town._id}>{town.name}</li>);
    // };

    // const gotoHotels = (town) => {
    //     // e.preventDefault();
    //     history.push("/get_hotels");
    //     localStorage.setItem('town', town);
    //     console.log(town);
    //
    // };
    const removeBooking = (id) => {
        console.log('id', id);
        fetch(`http://localhost:5000/api/delete_bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    // console.log('success');
                    // console.log(typeof(json.data));
                    console.log(json);
                    window.location.reload();

                    // setShowSpinner(false);
                    // setBookingDetails(json.data)
                } else {
                    console.log('Error Occurred');
                }
            })
    };

    return (
        <div className={classes.main}>
            <CHeader/>
            <h1 className={classes.heading}>My Bookings</h1>
            <p className={classes.subHeading}>Thank you for choosing our booking service.</p>
            {bookingDetails &&
            <div className={classes.row}>

                {bookingDetails.map((booking) =>
                    <div key={booking._id}>
                        <Card classname={classes.cardBody} >
                            <div className={classes.oneTown} >
                                {/*<img alt="" className={classes.image} src={booking.image}/>*/}
                                <p className={classes.header} >{booking.hotel_name}</p>
                                <p className={classes.content}>Checkin Date : {moment(booking.checkin_date).format('YYYY-mm-dd')}</p>
                                <p className={classes.content}>Checkout Date : {moment(booking.checkout_date).format('YYYY-mm-dd')}</p>
                                <p className={classes.content}>People count : {booking.people_count}</p>
                                {/*<p>Payment : {booking.payment &&}</p>*/}
                                {booking.payment ?
                                <p className={classes.content}>Payment : Completed</p>
                                    : <p className={classes.content}>Payment : Pending</p>
                                }
                                <div className={classes.buttons}>
                                    <Button className={classes.payNowButton}>Pay Now</Button>
                                    <Button className={classes.cancelButton} onClick={() => removeBooking(booking._id)}>Cancel</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
            }

            {showSpinner && <Spinner/>}
        </div>
    );
};

export default GetBookings;
