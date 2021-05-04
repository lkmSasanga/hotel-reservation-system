import React from 'react';
// import HOHeader from "./HOHeader/HOHeader";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './AdminDashboard.module.css';
import Card from "../UI/Card/Card";
// import AddHotel from "./AddHotel";
import {useHistory} from "react-router-dom";
// import ViewBookings from "./ViewBookings";
import Background from "../../assets/bg2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faCrown} from "@fortawesome/free-solid-svg-icons";
import SAHeader from "./SAHeader/SAHeader";

const AdminDashboard = () => {
    const history = useHistory();

    const loadTownAddingForm  = () => {
        history.push("/add_town");
    };

    const loadCustomers = () => {
        history.push("/all_customers");
    };
    const loadGetHotels = () => {
        history.push("/get_my_hotels");
    };

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
                <SAHeader/>

                <h1 className={classes.heading}>Dashboard</h1>
                <p className={classes.subHeading}>Hey, Welcome to Board!</p>

                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        {/*<FontAwesomeIcon icon={faArrowAltCircleUp}/>*/}
                        <h1 className={classes.title}
                            onClick={loadTownAddingForm}>
                            {<FontAwesomeIcon icon={faCrown} /> }&nbsp; Add a Town</h1>
                    </Card>
                </div>
                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadCustomers}>
                            {<FontAwesomeIcon icon={faBookmark}/>} &nbsp; Customers</h1>
                    </Card>
                </div>
                <div className={classes.row}>
                    <Card className={classes.cardBody}>
                        <h1 className={classes.title}
                            onClick={loadGetHotels}>
                            {/*{<FontAwesomeIcon icon={faHotel}/>}*/}
                            &nbsp; Get Hotels</h1>
                    </Card>
                </div>

            </section>
        </div>
    );
}

export default AdminDashboard;
