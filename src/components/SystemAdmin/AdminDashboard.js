import React, {useEffect, useState} from 'react';

import classes from './AdminDashboard.module.css';
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown, faUser} from "@fortawesome/free-solid-svg-icons";
import SAHeader from "./SAHeader/SAHeader";

import DonetChart from "../UI/DonetChart/DonetChart";
import { CountUp } from 'use-count-up'

const AdminDashboard = () => {
    const [customerCount, setCustomerCount] = useState();
    const [hotelOwnerCount, setHotelOwnerCount] = useState();
    const [bookingsCount, setBookingsCount] = useState();

    const history = useHistory();

    const ChartDetails = {
      data1 : {
          name: 'Customers',
          count: customerCount
      },
      data2: {
          name: 'Hotel Owners',
          count: hotelOwnerCount
      }
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/all_customers?userType=Customer`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    console.log('success');
                    console.log(json.data.length);
                    setCustomerCount(json.data.length);
                } else {
                    console.log('Error Occurred');
                }
            })
        fetch(`http://localhost:5000/api/all_customers?userType=Hotel_Owner`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    console.log('success');
                    console.log(json.data);
                    setHotelOwnerCount(json.data.length);
                } else {
                    console.log('Error Occurred');
                }
            })

        fetch('http://localhost:5000/api/all_bookings', {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    setBookingsCount(json.data.length);
                } else {
                    console.log('Error Occurred');
                }
            })

    },[]);



    const loadTownAddingForm  = () => {
        history.push("/add_town");
    };

    const loadCustomers = () => {
        history.push("/all_customers");
    };
    const loadHotelOwners = () => {
        history.push("/all_hotel_owners");
    };

    const BookingCountComponent = () => <CountUp isCounting end={bookingsCount} duration={4} />
    const CustomersCountComponent = () => <CountUp isCounting end={customerCount} duration={4} />
    const HotelOwnersCountComponent = () => <CountUp isCounting end={hotelOwnerCount} duration={4} />

    return (
        <div className={classes.main}>
                <SAHeader/>

                <h1 className={classes.heading}>Dashboard</h1>
                <p className={classes.subHeading}>Hey, Welcome to Board!</p>

                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadTownAddingForm}>
                            {<FontAwesomeIcon icon={faCrown} /> }&nbsp; Add a Town</h1>
                    </Card>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadCustomers}>
                            {<FontAwesomeIcon icon={faUser}/>}&nbsp; Customers</h1>
                    </Card>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadHotelOwners}>
                            {<FontAwesomeIcon icon={faUser}/>}&nbsp; Hotel Owners</h1>
                    </Card>
                </div>
                <div className={classes.row}>

                    <DonetChart chartDetails={ChartDetails}/>

                    <Card className={classes.countCardBody}>
                        <h1 className={classes.countName}>Bookings</h1>
                        <p className={classes.count}>{BookingCountComponent()}</p>
                    </Card>

                </div>
            <div className={classes.rowBottom}>
                <p className={classes.countDown}>+{CustomersCountComponent()}&nbsp;  Customers</p>
                <p className={classes.countDown}>+{HotelOwnersCountComponent()}&nbsp; Hotel Owners</p>
            </div>
            <p className={classes.space}>.</p>
        </div>
    );
}

export default AdminDashboard;
