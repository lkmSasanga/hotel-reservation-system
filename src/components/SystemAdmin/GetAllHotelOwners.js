import React, {useEffect, useState} from 'react';

import classes from './GetAllHotelOwners.module.css';
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import Background from '../../assets/bg2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import SAHeader from "./SAHeader/SAHeader";

const GetAllHotelOwners = () => {
    const [customersDetails, setCustomersDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    const [clickedTown, setClickedTown] = useState();

    useEffect(() => {
        setClickedTown(localStorage.getItem('town'));
        setShowSpinner(true);

        fetch(`http://localhost:5000/api/all_customers?userType=Hotel_Owner`, {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
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
                    setCustomersDetails(json.data)
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
                <SAHeader/>
                <h1 className={classes.heading}>All the Hotel Owners of the System</h1>
                <p className={classes.subHeading}>Hotel Owner Details</p>
                {customersDetails &&
                <div className={classes.row}>
                    {customersDetails.map((customer) =>
                        <div key={customer._id} >
                            <Card className={classes.cardBody}>
                                <div className={classes.oneHotel}>
                                    <p className={classes.header}>Username: {customer.username}</p>
                                    <p className={classes.details}>{<FontAwesomeIcon icon={faUser} /> } &nbsp; User ID: &nbsp;{customer._id}</p>
                                    <p className={classes.details}>{<FontAwesomeIcon icon={faEnvelope} /> } &nbsp; Email: &nbsp;{customer.email}</p>
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

export default GetAllHotelOwners;
