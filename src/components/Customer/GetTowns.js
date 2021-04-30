import React, {useEffect, useState} from 'react';

import classes from './GetTowns.module.css';
import CHeader from "./CHeader/CHeader";
import Spinner from "../UI/Spinner/Spinner";

const GetTowns = () => {
    const [loggedUserToken, setLoggedUserToken] = useState('');
    const [townsDetails, setTownsDetails] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);


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
                    console.log('success');
                    console.log(typeof(json.data));
                    console.log(json.data);

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

    const townsList = () => {
        return townsDetails.map((town) => <li key={town._id}>{town.name}</li>);
    };

    return (
      <div className={classes.main}>
          <CHeader/>
          <h1 className={classes.heading}>Towns</h1>
          <p className={classes.subHeading}>These popular destinations have a lot to offer</p>
          {townsDetails &&
          <div>
              {townsDetails.map((town) => <li key={town._id}>{town.name}</li>)}
          </div>
          }

          {showSpinner && <Spinner/>}
      </div>
    );
}

export default GetTowns;
