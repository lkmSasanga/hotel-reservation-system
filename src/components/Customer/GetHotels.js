import React, {useEffect, useState} from 'react';

import classes from './GetHotels.module.css';
import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";

const GetHotels = () => {
    const [loggedUserToken, setLoggedUserToken] = useState('');
    const [hotelDetails, setHotelDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    const [clickedTown, setClickedTown] = useState();


    const history = useHistory();

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
        setClickedTown(localStorage.getItem('town'));
        setShowSpinner(true);

        if (1) {
            fetch(`http://localhost:5000/api/get_hotels?city=${encodeURIComponent(localStorage.getItem('town'))}`, {
                method: 'GET',
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`,
                    // 'Content-Type': 'application/json',
                },
            }).then(res => res.json())
                .then(json => {
                    if (json.success) {
                        console.log('success');
                        console.log(typeof(json.data));
                        console.log(json.data);
                        console.log(localStorage.getItem('town'))
                        console.log(clickedTown)

                        setShowSpinner(false);
                        setHotelDetails(json.data)
                    } else {
                        console.log('Error Occurred');
                    }
                })
        }


    },[]);

    // const townsList = () => {
    //     return townsDetails.map((town) => <li key={town._id}>{town.name}</li>);
    // };

    return (
        <div className={classes.main}>
            <CHeader/>
            <h1 className={classes.heading}>Hotels</h1>
            <p className={classes.subHeading}>These popular destinations have a lot to offer</p>
            {hotelDetails &&
            <div className={classes.row}>
                {hotelDetails.map((hotel) =>
                    <div key={hotel._id} >
                        <Card classname={classes.cardBody}>
                            <div className={classes.oneHotel}>
                                <img alt="" className={classes.image} src={hotel.image}/>
                                <p className={classes.header}>{hotel.hotel_name}</p>
                                <p className={classes.header}>Location: {hotel.city}</p>
                                <p className={classes.header}>Rate: {hotel.rate}</p>
                                <p className={classes.header}>Rooms Available: {hotel.rooms_available}</p>
                                <p className={classes.header}>Price: {hotel.price}</p>

                            </div>
                        </Card>


                    </div>
                )}
            </div>
            }
            {showSpinner && <Spinner/>}
        </div>
    );
}

export default GetHotels;