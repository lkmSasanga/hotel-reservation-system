import React, {useState} from 'react';
import MainHeader from "../MainHeader/MainHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ImageUpload from "../UI/ImageUpload/ImageUpload";

const AddTown = () => {
    const [hotelName, setHotelName] = useState();
    const [image, setImage] = useState();

    const hotelNameChangeHandler = e => {
        setHotelName(e.target.value);
    };

    const imageAddingHandler = (file) => {
        setImage(file);
        // console.log(file)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(hotelName, image);
    };

    return (
        <React.Fragment>
            <MainHeader/>
            <div className={classes.main}>
                <h2 className={classes.heading}>Add a new Town</h2>
                <p className={classes.subHeading}>Expanding our services</p>
                <Card className={classes.cardBody}>
                    <h1 className={classes.newHotel}>New Hotel</h1>
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
