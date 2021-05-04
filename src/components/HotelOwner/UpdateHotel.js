import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";


import classes from './UpdateHotel.module.css';
import Card from "../UI/Card/Card";
// import {useHistory} from "react-router-dom";
import Background from '../../assets/bg2.png';
import HOHeader from "./HOHeader/HOHeader";
import Button from "../UI/Button/Button";
import ImageUpload from "../UI/ImageUpload/ImageUpload";
import ThreeDots from "../UI/ThreeDots/ThreeDots";
import {toast} from "react-toastify";


const UpdateHotel = (props) => {
    const [hotelDetails, setHotelDetails] = useState('');
    const [hotelName, setHotelName] = useState();
    const [city, setCity] = useState();
    const [rate, setRate] = useState();
    const [roomsAvailable, setRoomsAvailable] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    // const [loggedUserToken, setLoggedUserToken] = useState();
    const [loading, setLoading] = useState();

    // const history = useHistory();
    const location  = useLocation();

    useEffect(() => {
        // setShowSpinner(true);
        console.log(location.state.hotelDetails);
        setHotelDetails(location.state.hotelDetails);

    },[]);


    const hotelNameChangeHandler = (e) => {
        e.preventDefault();
        setHotelName(e.target.value);
    };
    const cityChangeHandler = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    };
    const rateChangeHandler = (e) => {
        e.preventDefault();
        setRate(e.target.value);
    };
    const roomsAvailableChangeHandler = (e) => {
        e.preventDefault();
        setRoomsAvailable(e.target.value);
    };
    const contactNumberChangeHandler = (e) => {
        e.preventDefault();
        setContactNumber(e.target.value);
    };
    const priceChangeHandler = (e) => {
        e.preventDefault();
        setPrice(e.target.value);
    };
    const imageAddingHandler = (file) => {
        setImage(file);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(`http://localhost:5000/api/update_hotel/${hotelDetails._id}`, {
            method: 'POST',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hotelOwner_id: localStorage.getItem('id'),
                city: city,
                hotel_name: hotelName,
                rate: rate,
                rooms_available: roomsAvailable,
                price: price,
                image: image,
                contact_no: contactNumber
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                // console.log('inside api call');

                if (json.success) {
                    toast("New Hotel added Successfully!", {type: "success"});

                    console.log('login successful', json);
                    setLoading(false);
                    setImage('');
                    setHotelName('');
                }
                else {
                    console.log('Error Occurred');
                    console.log(json)
                    toast("Unable to add the Hotel. Try again!", {type: "error"});
                }
            });
    };

    let sectionStyle = {
        marginTop: -18,
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        resizeMode: 'repeat'
        // backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={classes.main}>
            {/*<section style={ sectionStyle } >*/}
                <HOHeader/>
                <h1 className={classes.heading}>Updating Hotel: {hotelDetails.hotel_name}</h1>
                <p className={classes.subHeading}>Upgrade your Hotel Offerings to improve customer reach!</p>

                {hotelDetails &&
                <div>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.newHotel}>Hotel Info</h1>
                        <form>
                            <div className={classes.control}>
                                <label>Hotel name</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.hotel_name || ''}
                                    onChange={hotelNameChangeHandler}
                                />
                            </div>
                            <div className={classes.control}>
                                <label>City</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.city || ''}
                                    onChange={cityChangeHandler}
                                />
                            </div>
                            <div className={classes.control}>
                                <label>Rate</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.rate || ''}
                                    onChange={rateChangeHandler}
                                />
                            </div>
                            <div className={classes.control}>
                                <label>Rooms Available</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.rooms_available || ''}
                                    onChange={roomsAvailableChangeHandler}
                                />
                            </div>
                            <div className={classes.control}>
                                <label>Contact Number</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.contact_no || ''}

                                    onChange={contactNumberChangeHandler}
                                />
                            </div>
                            <div className={classes.control}>
                                <label>Price (Rs.)</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={hotelDetails.price || ''}
                                    onChange={priceChangeHandler}
                                />
                            </div>

                            <div className={classes.control}>
                                <label>Insert an Image</label>
                            </div>
                            <ImageUpload
                                onAddingImage={imageAddingHandler}
                                defaultValue={hotelDetails.image || ''}

                            />

                            <div className={classes.actions}>
                                <Button
                                    type="submit"
                                    className={classes.btn}
                                    onClick={onSubmit}
                                >
                                    Update
                                </Button>
                            </div>
                            {/*{!loading && <p className={classes.submittingMsg}>{submitMsg}</p>}*/}
                            {loading && <ThreeDots/>}
                        </form>
                    </Card>


                </div>
                }
                {/*{showSpinner && <Spinner/>}*/}
            {/*</section>*/}
        </div>
    );
}

export default UpdateHotel;
