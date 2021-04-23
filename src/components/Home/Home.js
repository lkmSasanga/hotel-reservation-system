import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

// import Card from '../UI/Card/Card';
import classes from './Home.module.css';

import galle from '../Media/galle.jpg';
import Properties from "../Properties/Properties";
import MainHeader from "../MainHeader/MainHeader";
// import ambalangoda from '../Media/1.jpg';
// import hikkaduwa from '../Media/2.jpg';
// import iduruwa from '../Media/3.jpg';
// import bentota from '../Media/4.jpg';
// import galle from '../Media/galle.jpg';

const Home = (props) => {
    const [showProperties, setShowProperties] = useState(false);
    const history = useHistory();

    const loadPropertiesPageHandler = () => {
        console.log('clicked');
        setShowProperties(true);
        history.push("/properties");
    };

    return (
        <div className={classes.main}>
            <MainHeader/>
            {!showProperties ?
                <div>
                <h2 className={classes.heading}>Explore Holiday Resorts</h2>
                <p className={classes.subHeading}>These popular destinations have a lot to offer</p>
                <div className={classes.row}>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image" onClick={loadPropertiesPageHandler}/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Ambalangoda</h2>
                        <p className={classes.details}>10 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Hikkaduwa</h2>
                        <p className={classes.details}>21 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Iduruwa</h2>
                        <p className={classes.details}>17 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Bentota</h2>
                        <p className={classes.details}>11 Properties</p>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                    <div className={classes.home}>
                        <img className={classes.image} src={galle} alt="Galle Image"/>
                        <h2 className={classes.header}>Galle</h2>
                        <p className={classes.details}>14 Properties</p>
                    </div>
                </div>
            </div> : <Properties/>}

        </div>


    );
};

export default Home;
