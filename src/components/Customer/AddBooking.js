import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
// import HOHeader from "./HOHeader/HOHeader";

import classes from './AddBooking.module.css';
import Card from "../UI/Card/Card";
import ImageUpload from "../UI/ImageUpload/ImageUpload";
import Button from "../UI/Button/Button";
import ThreeDots from "../UI/ThreeDots/ThreeDots";
import CHeader from "./CHeader/CHeader";

const AddBooking = (props) => {
    const [customerID, setCustomerID] = useState();
    const [checkinDate, setCheckinDate] = useState();
    const [checkoutDate, setCheckoutDate] = useState();
    const [peopleCount, setPeopleCount] = useState();

    const [loggedUserToken, setLoggedUserToken] = useState();
    const [loading, setLoading] = useState();
    const [submitMsg, setSubmitMsg] = useState('');
    const [hotelDetails, setHotelDetails] = useState('');

    const location  = useLocation();

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
        setCustomerID(localStorage.getItem('id'));

        console.log(location.state.hotelDetails);
        setHotelDetails(location.state.hotelDetails);
        // console.log(props.hotelDetails)
    },[]);

    const checkinDateHandler = (e) => {
        e.preventDefault();
        setCheckinDate(e.target.value);
    };
    const checkoutDateHandler = (e) => {
        e.preventDefault();
        setCheckoutDate(e.target.value);
    };
    const peopleCountHandler = (e) => {
        e.preventDefault();
        setPeopleCount(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(hotelDetails);

        fetch('http://localhost:5000/api/add_booking', {
            method: 'POST',
            headers: {
                'Authorization': `${loggedUserToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_id: customerID,
                hotelOwner_id: hotelDetails.hotelOwner_id,
                hotel_id: hotelDetails._id,
                checkin_date: checkinDate,
                checkout_date: checkoutDate,
                people_count: peopleCount
            }),
        }).then(res => res.json())
            .then(json => {
                // console.log('json', json);
                // console.log('inside api call');

                if (json.success) {
                    console.log('booking successful', json);
                    setLoading(false);
                    setSubmitMsg('Booking added Successfully');

                    setCheckinDate('');
                    setCheckoutDate('');
                    setPeopleCount('');
                }
                else {
                    console.log('Error Occurred');
                    console.log(json)
                    setSubmitMsg('Unable to add the Booking');
                }
            });
    };

    return (
        <React.Fragment>
            <CHeader/>
            <div className={classes.main}>
                <h2 className={classes.heading}>Hotel Booking</h2>
                <p className={classes.subHeading}>Welcome to our booking service</p>
                <Card className={classes.cardBody}>
                    <h1 className={classes.newHotel}>Booking to : {hotelDetails.hotel_name}</h1>
                    <p className={classes.townName}>{hotelDetails.city}</p>
                    <form>
                        <div className={classes.control}>
                            <label>Checkin Date</label>
                            <input
                                type="date"
                                required
                                onChange={checkinDateHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Checkout Date</label>
                            <input
                                type="date"
                                required
                                onChange={checkoutDateHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>People Count</label>
                            <input
                                type="number"
                                required
                                onChange={peopleCountHandler}
                            />
                        </div>

                        <div className={classes.actions}>
                            <Button
                                type="submit"
                                className={classes.btn}
                                onClick={onSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                        {!loading && <p className={classes.submittingMsg}>{submitMsg}</p>}
                        {loading && <ThreeDots/>}
                    </form>
                </Card>
            </div>

            <div style={{paddingBottom: '20px'}}>.</div>
        </React.Fragment>
    );
};

export default AddBooking;
