import React from "react";
import { useHistory } from "react-router-dom";

import classes from './Properties.module.css';

// import galle from "../Media/galle.jpg";
import MainHeader from "../MainHeader/MainHeader";

const Properties = (props) => {
    const history = useHistory();

    const gotoProperty = () => {
        history.push("/property");
    };



return (
    <div>
        <MainHeader/>
        <h1 className={classes.heading}>Properties Page</h1>
        {/*<div className={classes.row}>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image" onClick={gotoProperty}/>*/}
        {/*        <h2 className={classes.header} onClick={gotoProperty}>Villa Surf Beach</h2>*/}
        {/*        <p className={classes.details} onClick={gotoProperty}>Galle Fort</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Mango House</h2>*/}
        {/*        <p className={classes.details}>Galle Fort</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Yara Galle Fort</h2>*/}
        {/*        <p className={classes.details}>Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Amari Galle</h2>*/}
        {/*        <p className={classes.details}>Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>The Bertizan Galle Fort</h2>*/}
        {/*        <p className={classes.details}>Thalpe</p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className={classes.row}>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>The Postcard Galle</h2>*/}
        {/*        <p className={classes.details}>Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Green Casa</h2>*/}
        {/*        <p className={classes.details}>Galle Fort</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Ging View Villa</h2>*/}
        {/*        <p className={classes.details}>Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Serenity House</h2>*/}
        {/*        <p className={classes.details}>Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Bouna Vista North</h2>*/}
        {/*        <p className={classes.details}>Galle </p>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className={classes.row}>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>The Postcard Galle</h2>*/}
        {/*        <p className={classes.details}> Galle</p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Green Casa</h2>*/}
        {/*        <p className={classes.details}>Galle </p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Ging View Villa</h2>*/}
        {/*        <p className={classes.details}>Galle </p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Serenity House</h2>*/}
        {/*        <p className={classes.details}>Galle </p>*/}
        {/*    </div>*/}
        {/*    <div className={classes.home}>*/}
        {/*        <img className={classes.image} src={galle} alt="Galle Image"/>*/}
        {/*        <h2 className={classes.header}>Villa White Dome</h2>*/}
        {/*        <p className={classes.details}>Galle Fort</p>*/}
        {/*    </div>*/}

        {/*</div>*/}

    </div>
)

};

export default Properties;
