import React, {useEffect, useState} from 'react';
import HOHeader from "./HOHeader/HOHeader";

import classes from './AddHotel.module.css';
import Card from "../UI/Card/Card";
import ImageUpload from "../UI/ImageUpload/ImageUpload";
import Button from "../UI/Button/Button";
import ThreeDots from "../UI/ThreeDots/ThreeDots";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHotel = () => {
    const [hotelOwnerID, setHotelOwnerID] = useState();
    const [hotelName, setHotelName] = useState();
    const [city, setCity] = useState();
    const [rate, setRate] = useState();
    const [roomsAvailable, setRoomsAvailable] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();


    const [loggedUserToken, setLoggedUserToken] = useState();
    const [loading, setLoading] = useState();

    // const [submitMsg, setSubmitMsg] = useState('');

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
        setHotelOwnerID(localStorage.getItem('id'));
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

        fetch('http://localhost:5000/api/add_hotel', {
            method: 'POST',
            headers: {
                'Authorization': `${loggedUserToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hotelOwner_id: hotelOwnerID,
                city: city,
                hotel_name: hotelName,
                rate: rate,
                rooms_available: roomsAvailable,
                price: price,
                image: image
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                // console.log('inside api call');

                if (json.success) {
                    console.log('login successful', json);
                    setLoading(false);
                    // setSubmitMsg('New Hotel added Successfully');
                    // this.setState({recievedUserType: json.user.userType});
                    toast("New Hotel added Successfully!", {type: "success"});

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

    return (
        <React.Fragment>
            <HOHeader/>

            <div className={classes.main}>
                <h2 className={classes.heading}>Add a new Hotel</h2>
                <p className={classes.subHeading}>Expanding your services</p>
                <ToastContainer/>

                <Card className={classes.cardBody}>
                    <h1 className={classes.newHotel}>Hotel Info</h1>
                    <form>
                        <div className={classes.control}>
                            <label>Hotel name</label>
                            <input
                                type="text"
                                required
                                onChange={hotelNameChangeHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>City</label>
                            <input
                                type="text"
                                required
                                onChange={cityChangeHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Rate</label>
                            <input
                                type="text"
                                required
                                onChange={rateChangeHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Rooms Available</label>
                            <input
                                type="text"
                                required
                                onChange={roomsAvailableChangeHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Price</label>
                            <input
                                type="text"
                                required
                                onChange={priceChangeHandler}
                            />
                        </div>

                        <div className={classes.control}>
                            <label>Insert an Image</label>
                        </div>
                        <ImageUpload onAddingImage={imageAddingHandler}/>

                        <div className={classes.actions}>
                            <Button
                                type="submit"
                                className={classes.btn}
                                onClick={onSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                        {/*{!loading && <p className={classes.submittingMsg}>{submitMsg}</p>}*/}
                        {loading && <ThreeDots/>}
                    </form>
                </Card>
            </div>

            <div style={{paddingBottom: '20px'}}>.</div>
        </React.Fragment>
    );
};

export default AddHotel;
