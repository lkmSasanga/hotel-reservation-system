import React, {useEffect, useState} from 'react';

import classes from './GetTowns.module.css';
import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";
import Card from "../UI/Card/Card";
import {useHistory} from "react-router-dom";
import Background from '../../assets/bg2.png';

const GetTowns = () => {
    const [loggedUserToken, setLoggedUserToken] = useState('');
    const [townsDetails, setTownsDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));
        setShowSpinner(true);

        fetch('http://localhost:5000/api/get_towns', {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    // console.log('success');
                    // console.log(typeof(json.data));
                    // console.log(json.data);

                    setShowSpinner(false);
                    setTownsDetails(json.data)
                } else {
                    console.log('Error Occurred');
                }
            })

        // axios.get('http://localhost:5000/api/get_towns', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': `${loggedUserToken}`,
        //     }
        // }).then(response => {
        //     let output = response.data
        //     console.log(output);
        // }).catch((error) => {
        //     console.log(error);
        // })
    },[]);

    // const townsList = () => {
    //     return townsDetails.map((town) => <li key={town._id}>{town.name}</li>);
    // };

    const gotoHotels = (town) => {
        // e.preventDefault();
        history.push("/get_hotels");
        localStorage.setItem('town', town);
        console.log(town);
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
              <CHeader/>

              <h1 className={classes.heading}>Explore Holiday Resorts</h1>
              <p className={classes.subHeading}>These popular destinations have a lot to offer</p>



          {townsDetails &&
          <div className={classes.row}>

              {townsDetails.map((town) =>
                  <div key={town._id} onClick={() => gotoHotels(town.name)}>
                      <Card classname={classes.cardBody} >
                          <div className={classes.oneTown} >
                              <img alt="" className={classes.image} src={town.image}/>
                              <p className={classes.header} >{town.name}</p>

                          </div>
                      </Card>


                  </div>
                  )}
          </div>
          }

          {showSpinner && <Spinner/>}
          </section>
      </div>
    );
}

export default GetTowns;
