import React, {useEffect, useState} from 'react';
import moment from "moment";

import classes from './GetMyHotels.module.css';
// import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import HOHeader from "./HOHeader/HOHeader";
import Background from "../../assets/bg2.png";
import Button from "../UI/Button/Button";
import {useHistory} from "react-router-dom";

const GetMyHotels = () => {
    const [myHotelDetails, setMyHotelDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    // const [paymentStatus, setPaymentStatus] = useState('Pending');

    const history = useHistory();
    moment().format();

    useEffect(() => {
        // setLoggedUserId(localStorage.getItem('id'));
        setShowSpinner(true);

        fetch(`https://hrs-dev.herokuapp.com/api/get_my_hotels/${encodeURIComponent(localStorage.getItem('id'))}`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    // console.log(json.data);

                    setShowSpinner(false);
                    setMyHotelDetails(json.data)
                } else {
                    console.log('Error Occurred');
                }
            })

    },[]);

    const gotoEditHotel = (hotel) => {
        console.log(hotel._id);
        console.log(hotel);
        history.push("/update_hotel", {hotelDetails: hotel});
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
                <h1 className={classes.heading}>My Hotels</h1>
                <p className={classes.subHeading}>Thank you for choosing our booking service.</p>
                {myHotelDetails &&
                <div className={classes.row}>

                    {myHotelDetails.map((hotel) =>
                        <div key={hotel._id}>
                            <Card className={classes.cardBody} >
                                <div className={classes.oneHotel} >
                                    <p className={classes.header} >{hotel.hotel_name}</p>
                                    <img alt="" className={classes.image} src={hotel.image}/>

                                    <p className={classes.content}>Hotel ID : {hotel._id}</p>
                                    <p className={classes.content}>City : {hotel.city}</p>
                                    <p className={classes.content}>Price : {hotel.price}</p>
                                    <p className={classes.content}>Rate : {hotel.rate}</p>
                                    <p className={classes.content}>Rooms Available : {hotel.rooms_available}</p>

                                    <Button
                                        className={classes.bookNowButton} onClick={() => gotoEditHotel(hotel)}>View
                                    </Button>
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

export default GetMyHotels;
