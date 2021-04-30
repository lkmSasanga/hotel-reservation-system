import React, {useEffect, useState} from 'react';

import classes from './GetTowns.module.css';
import CHeader from "./CHeader/CHeader";

const GetTowns = () => {
    const [loggedUserToken, setLoggedUserToken] = useState('');
    const [townsDetails, setTownsDetails] = useState('');

    useEffect(() => {
        setLoggedUserToken(localStorage.getItem('token'));

        fetch('http://localhost:5000/api/get_towns', {
            method: 'GET',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                // 'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(json => {
                console.log(json.data)
                setTownsDetails(json.data)
                if (json.success) {
                    console.log('success');
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


    return (
      <div className={classes.main}>
          <CHeader/>
          <h1 className={classes.heading}>Towns</h1>
          <p className={classes.subHeading}>These popular destinations have a lot to offer</p>
      </div>
    );
};

export default GetTowns;
