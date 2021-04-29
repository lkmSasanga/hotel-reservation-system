import React, {useState, useEffect} from 'react';
import MainHeader from "../MainHeader/MainHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ImageUpload from "../UI/ImageUpload/ImageUpload";

const AddTown = (props) => {
    const [hotelName, setHotelName] = useState();
    const [image, setImage] = useState();
    const [loggedUserToken, setLoggedUserToken] = useState();

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
        // if (props.userDetails) {
        //     setLoggedUserToken(props.userDetails.data.token);
        //     console.log('[PROPS CHECKING]', props.userDetails.data.token);
        // }
    },[]);

    const hotelNameChangeHandler = e => {
        e.preventDefault();

        setHotelName(e.target.value);
        console.log('[PROPS CHECKING]', loggedUserToken);

    };

    const imageAddingHandler = (file) => {
        setImage(file);
        // console.log('[Image adding handler running]', file);
        // console.log(file)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log('[ONSUBMIT]',image);
        // console.log('[PROPS CHECKING ONSUBMIT]', loggedUserDetails);

        if (1) {
            fetch('http://localhost:5000/api/add_town', {
                method: 'POST',
                headers: {
                    'Authorization': `${loggedUserToken}`,
                    // 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.NjA4OGViOWRmMzgwNTgyOWUwZWYzNmM3.kPqMRwD4kApJCnsBEfn0Jn1uUDwYEVITFY-6xxmuve0',
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
                        // this.setState({recievedUserType: json.user.userType});
                        setImage('');
                        setHotelName('');

                    }
                    else {
                        console.log('Error Occurred');
                        console.log(json)

                    }
                });
        }
        console.log('Button Clicked');
        console.log(props.userDetails)



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
                                // onBlur={validateEmailHandler}
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
                    </form>
                </Card>
            </div>
        </React.Fragment>

    );
};

export default AddTown;
