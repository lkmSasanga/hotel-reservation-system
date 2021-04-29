import React, {useState} from 'react';
import MainHeader from "../MainHeader/MainHeader";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './OwnerDashboard.module.css';
import Card from "../UI/Card/Card";
import AddHotel from "./AddHotel";

const OwnerDashboard = () => {
    const [hideButtons, setHideButtons] = useState(false);

    const loadHotelAddingForm  = () => {
        setHideButtons(true);
    };

    const loadBookings = () => {
      setHideButtons(true);
    };

    return (
        <div className={classes.main}>
            <MainHeader/>
            <h1 className={classes.heading}>Dashboard</h1>
            <div className={classes.row}>
                <Card className={classes.cardBody}>
                    {/*<FontAwesomeIcon icon={faArrowAltCircleUp}/>*/}
                    <h1 className={classes.title} onClick={loadHotelAddingForm}>Add a Hotel</h1>
                </Card>
                <Card className={classes.cardBody}>
                    <h1 className={classes.title} onClick={loadBookings}>Bookings</h1>
                </Card>
            </div>
            <div>
                <AddHotel/>
            </div>

        </div>
    );
};

export default OwnerDashboard;
