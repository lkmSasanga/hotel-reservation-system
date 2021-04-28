import React, {useState, useEffect} from 'react';
import MainHeader from "../MainHeader/MainHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ImageUpload from "../UI/ImageUpload/ImageUpload";

const AddTown = (props) => {
    const [hotelName, setHotelName] = useState();
    const [image, setImage] = useState();
    const [loggedUserDetails, setLoggedUserDetails] = useState();

    useEffect(() => {
        setLoggedUserDetails(props.userDetails);
    },[props.userDetails]);

    const hotelNameChangeHandler = e => {
        setHotelName(e.target.value);
    };

    const imageAddingHandler = (file) => {
        setImage(file);
        console.log('[Image adding handler running]')
        // console.log(file)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('[IMAGE ONSUBMIT]',image);
        console.log('[PROPS CHECKING ONSUBMIT]', loggedUserDetails);

        fetch('http://localhost:5000/api/add_town', {
            method: 'POST',
            headers: {
                // 'Authorization': `${props.userDetails.data.token}`,
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
                    // console.log('get user data', json.user.userType);
                    // this.setState({recievedUserType: json.user.userType});

                    // this.setState({
                        // email: '',
                        // password: '',
                        // isLoading: false,
                        // signUpError: '',
                        // errorOccurs: false,
                        // loginSuccess: true
                    // });
                }
                else {
                    // if(json.message === 'Invalid Email!') {
                    //     this.setState({invalidEmail: true})
                    // } else if(json.message === 'Invalid Password!') {
                    //     this.setState({invalidPassword: true})
                    // }
                    //
                    // this.setState({
                        // signUpError: json.message,
                        // email: '',
                        // password: '',
                        // isLoading: false,
                        // errorOccurs: true
                    // });
                }
            });

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
