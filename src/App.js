import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import axios from 'axios';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [receivedData, setReceivedData] = useState('');

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }

    axios.get('http://localhost:5000/hotels').then(response => {
      const receivedData = response.data;
      console.log(receivedData);
      setReceivedData(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }, []);

  const loginHandler = (email, password) => {
    //  should check email and password
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
      <BrowserRouter>
        {/*<Switch>*/}
          <main>
            <div>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login" component={Login}/>
              <Route exact path="/home" component={Home}/>
              <Route path="/properties" component={Properties}/>
              <Route path="/property" component={() => (<Property hotelData={receivedData}/>)}/>
            </div>

            {/*{!isLoggedIn && <Login onLogin={loginHandler} />}*/}
            {/*{isLoggedIn && <Home onLogout={logoutHandler} />}*/}
          </main>
        {/*</Switch>*/}

      </BrowserRouter>
  );
}

export default App;
