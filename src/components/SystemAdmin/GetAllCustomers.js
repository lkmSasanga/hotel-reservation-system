import React, {useEffect, useState} from 'react';

import classes from './GetAllCustomers.module.css';
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";
import Button from "../UI/Button/Button";
import Background from '../../assets/bg2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCrown, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import HOHeader from "../HotelOwner/HOHeader/HOHeader";

const GetAllCustomers = () => {
    // const [loggedUserToken, setLoggedUserToken] = useState('');
    const [customersDetails, setCustomersDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    const [clickedTown, setClickedTown] = useState();

    const history = useHistory();

    useEffect(() => {
        // setLoggedUserToken(localStorage.getItem('token'));
        setClickedTown(localStorage.getItem('town'));
        setShowSpinner(true);

        if (1) {
            fetch(`http://localhost:5000/api/all_customers?userType=Customer`, {
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
                        setCustomersDetails(json.data)
                    } else {
                        console.log('Error Occurred');
                    }
                })
        }

    },[]);

    const gotoHotel = (hotel) => {
        console.log(hotel.hotelOwner_id)
        console.log(hotel._id)
        history.push("/add_booking", {hotelDetails: hotel});

    }

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
                <h1 className={classes.heading}>All the Customers of the System</h1>
                <p className={classes.subHeading}>Customer Details</p>
                {customersDetails &&
                <div className={classes.row}>
                    {customersDetails.map((customer) =>
                        <div key={customer._id} >
                            <Card className={classes.cardBody}>
                                <div className={classes.oneHotel}>
                                    {/*<img alt="" className={classes.image} src={hotel.image}/>*/}
                                    <p className={classes.header}>Username: {customer.username}</p>
                                    {/*<p className={classes.details}>Username: &nbsp;{customer.username}</p>*/}
                                    <p className={classes.details}>{<FontAwesomeIcon icon={faUser} /> } &nbsp; User ID: &nbsp;{customer._id}</p>
                                    <p className={classes.details}>{<FontAwesomeIcon icon={faEnvelope} /> } &nbsp; Email: &nbsp;{customer.email}</p>
                                    {/*<p className={classes.details}>Rate: &nbsp;*/}
                                    {/*    {hotel.rate} &nbsp;*/}
                                    {/*    {<FontAwesomeIcon icon={faStar} style={{color: '#fcd100'}}*/}
                                    {/*    />}*/}
                                    {/*</p>*/}

                                    {/*{+hotel.rooms_available > 0 ?*/}
                                    {/*    <p className={classes.details}>Rooms Available: &nbsp;{hotel.rooms_available}</p> :*/}
                                    {/*//     <p className={classes.details}*/}
                                    {/*//        style={{color:'white', backgroundColor: 'red', borderRadius: '20px', width:'7rem'}}>Houseful*/}
                                    {/*//     </p>*/}
                                    {/*// }*/}
                                    {/*<p className={classes.details}>Price: &nbsp; Rs.{hotel.price}</p>*/}
                                    {/*{+hotel.rooms_available > 0 ?*/}
                                    {/*    <Button*/}
                                    {/*        className={classes.bookNowButton}*/}
                                    {/*        // onClick={() => gotoHotel(hotel)}*/}
                                    {/*    >Book Now*/}
                                    {/*    </Button> :*/}
                                    {/*    <Button*/}
                                    {/*        className={classes.bookNowButton}*/}
                                    {/*        style={{backgroundColor: '#32315e'}}*/}
                                    {/*        // disabled={true}*/}
                                    {/*    >Book Now*/}
                                    {/*    </Button>*/}

                                    {/*}*/}
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

export default GetAllCustomers;
