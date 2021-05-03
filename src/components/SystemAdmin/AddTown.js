import React, {useState, useEffect} from 'react';
import SAHeader from "./SAHeader/SAHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ThreeDots from '../UI/ThreeDots/ThreeDots';
import ImageUpload from "../UI/ImageUpload/ImageUpload";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddTown = (props) => {
    const [townName, setTownName] = useState();
    const [image, setImage] = useState();
    const [loggedUserToken, setLoggedUserToken] = useState();
    const [loading, setLoading] = useState();
    const [submitMsg, setSubmitMsg] = useState('');

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
    },[]);

    const townNameChangeHandler = e => {
        e.preventDefault();
        setTownName(e.target.value);
    };

    const imageAddingHandler = (file) => {
        setImage(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch('http://localhost:5000/api/add_town', {
            method: 'POST',
            headers: {
                'Authorization': `${loggedUserToken}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                name: townName,
                image: image,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                // console.log('inside api call');

                if (json.success) {
                    console.log('login successful', json);
                    setLoading(false);
                    toast("New Town added Successfully!", {type: "success"});

                    // this.setState({recievedUserType: json.user.userType});
                    setImage('');
                    setTownName('');
                }
                else {
                    console.log('Error Occurred');
                    console.log(json)
                    toast("Unable to add new Town!", {type: "error"});

                }
            });
    };

    return (
        <React.Fragment>
            <SAHeader/>
            <div className={classes.main}>
                <h2 className={classes.heading}>Add a new Town</h2>
                <p className={classes.subHeading}>Expanding our services</p>
                <ToastContainer/>

                <Card className={classes.cardBody}>
                    <h1 className={classes.newHotel}>Town Info</h1>
                    <form>
                        <div className={classes.control}>
                            <label>Town name</label>
                            <input
                                type="text"
                                required
                                onChange={townNameChangeHandler}
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

export default AddTown;
