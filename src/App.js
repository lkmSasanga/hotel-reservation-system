import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }

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
            <Route path="/login" component={Login}/>
            <div>
              <MainHeader/>
              <Route exact path="/" component={Home}/>
              <Route path="/properties" component={Properties}/>
              <Route path="/property" component={Property}/>
            </div>


            {/*{!isLoggedIn && <Login onLogin={loginHandler} />}*/}
            {/*{isLoggedIn && <Home onLogout={logoutHandler} />}*/}
          </main>
        {/*</Switch>*/}

      </BrowserRouter>
  );
}

export default App;
