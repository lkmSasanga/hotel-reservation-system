import React, { useEffect } from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
// import axios from 'axios';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";

import AddTown from "./components/SystemAdmin/AddTown";
import OwnerDashboard from "./components/HotelOwner/OwnerDashboard";
import AddHotel from "./components/HotelOwner/AddHotel";
import ViewBookings from "./components/HotelOwner/ViewBookings";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [receivedData, setReceivedData] = useState('');

  useEffect(() => {
    // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    // if (storedUserLoggedInInformation === '1') {
    //   setIsLoggedIn(true);
    // }

    // axios.get('http://localhost:5000/api/hotels').then(response => {
    //   const receivedData = response.data;
    //   console.log(receivedData);
    //   setReceivedData(response.data);
    // }).catch((error) => {
    //   console.log(error);
    // });

  }, []);

  const loginHandler = (token) => {
    localStorage.setItem('token', token);
  };

  const onLoginUserDetailsHandler = (user) => {
    localStorage.setItem('id', user);
    console.log(user);
  };

  return (
      <BrowserRouter>
        {/*<Switch>*/}
          <main>
            <div>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route
                  path="/login"
                  // component={Login}
                  // onLogin={() => loginHandler()}
                  render={() => <Login
                      onLogin={loginHandler}
                      onLoginUserDetails={onLoginUserDetailsHandler}
                  />}
              />
              <Route
                  path="/home"
                  component={Home}
              />
              <Route path="/properties" component={Properties}/>
              <Route path="/property" component={() => (
                  <Property
                      // hotelData={receivedData}
                  />)}/>

              <Route path="/add_town" component={AddTown}/>
              <Route path="/owner_dashboard" component={OwnerDashboard}/>
              <Route path="/add_hotel" component={AddHotel}/>
              <Route path="/view_Bookings" component={ViewBookings}/>
            </div>

            {/*{!isLoggedIn && <Login onLogin={loginHandler} />}*/}
            {/*{isLoggedIn && <Home onLogout={logoutHandler} />}*/}
          </main>
        {/*</Switch>*/}

      </BrowserRouter>
  );
}

export default App;
