import React, {useState, useEffect} from 'react';
import MainHeader from "../MainHeader/MainHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ThreeDots from '../UI/ThreeDots/ThreeDots';
import ImageUpload from "../UI/ImageUpload/ImageUpload";

const AddTown = (props) => {
    const [hotelName, setHotelName] = useState();
    const [image, setImage] = useState();
    const [loggedUserToken, setLoggedUserToken] = useState();
    const [loading, setLoading] = useState();
    const [submitMsg, setSubmitMsg] = useState('');

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
    },[]);

    const hotelNameChangeHandler = e => {
        e.preventDefault();

        setHotelName(e.target.value);
    };

    const imageAddingHandler = (file) => {
        setImage(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (1) {
            fetch('http://localhost:5000/api/add_town', {
                method: 'POST',
                headers: {
                    'Authorization': `${loggedUserToken}`,
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    name: hotelName,
                    image: image,
                }),
            }).then(res => res.json())
                .then(json => {
                    console.log('json', json);
                    console.log('inside api call');

                    if (json.success) {
                        console.log('login successful', json);
                        setLoading(false);
                        setSubmitMsg('New Town added Successfully');
                        // this.setState({recievedUserType: json.user.userType});
                        setImage('');
                        setHotelName('');
                    }
                    else {
                        console.log('Error Occurred');
                        console.log(json)
                        setSubmitMsg('Unable to add new Town');
                    }
                });
        }
    };

    return (
        <React.Fragment>
            <MainHeader/>
            <div className={classes.main}>
                <h2 className={classes.heading}>Add a new Town</h2>
                <p className={classes.subHeading}>Expanding our services</p>
                <Card className={classes.cardBody}>
                    <h1 className={classes.newHotel}>Town Info</h1>
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
                        {!loading && <p className={classes.submittingMsg}>{submitMsg}</p>}
                        {loading && <ThreeDots/>}
                    </form>
                </Card>
            </div>
        </React.Fragment>

    );
};

export default AddTown;
