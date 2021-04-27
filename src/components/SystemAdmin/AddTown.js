import React from 'react';
import MainHeader from "../MainHeader/MainHeader";

import classes from './AddTown.module.css';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ImageUpload from "../UI/ImageUpload/ImageUpload";

const AddTown = () => {
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
                                // onChange={emailChangeHandler}
                                // onBlur={validateEmailHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label>Insert an Image</label>
                        </div>
                        <ImageUpload/>

                        <div className={classes.actions}>
                            <Button type="submit" className={classes.btn} >
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
