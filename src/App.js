import React, { useEffect } from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
// import axios from 'axios';
// import {loadStripe} from '@stripe/stripe-js';

import Login from './components/Login/Login';
// import Home from './components/Home/Home';
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";

import AddTown from "./components/SystemAdmin/AddTown";
import OwnerDashboard from "./components/HotelOwner/OwnerDashboard";
import AddHotel from "./components/HotelOwner/AddHotel";
import ViewBookings from "./components/HotelOwner/ViewBookings";
import GetTowns from "./components/Customer/GetTowns";
import GetHotels from "./components/Customer/GetHotels";
import AddBooking from "./components/Customer/AddBooking";
import GetBookings from "./components/Customer/GetBookings";
import Contact from "./components/Contact/Contact";
import GetMyHotels from "./components/HotelOwner/GetMyHotels";
import UpdateHotel from "./components/HotelOwner/UpdateHotel";
import AdminDashboard from "./components/SystemAdmin/AdminDashboard";
import GetAllCustomers from "./components/SystemAdmin/GetAllCustomers";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [receivedData, setReceivedData] = useState('');

  //stripe
  // const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

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

              <Route path="/properties" component={Properties}/>
              <Route path="/property" component={() => (
                  <Property
                      // hotelData={receivedData}
                  />)}/>

              <Route path="/add_town" component={AddTown}/>
              <Route path="/owner_dashboard" component={OwnerDashboard}/>
              <Route path="/add_hotel" component={AddHotel}/>
              <Route path="/hotel_Bookings" component={ViewBookings}/>

              <Route path="/get_towns" component={GetTowns}/>
              <Route path="/get_hotels" component={GetHotels}/>
              <Route path="/add_booking" component={AddBooking}/>
              <Route
                  path="/get_bookings"
                  render={() => <GetBookings
                      // stripe={stripePromise}
                  />}
              />
              <Route path="/get_my_hotels" component={GetMyHotels}/>
              <Route path="/update_hotel" component={UpdateHotel}/>
              <Route path="/admin_dashboard" component={AdminDashboard}/>
              <Route path="/all_customers" component={GetAllCustomers}/>
            </div>

            {/*{!isLoggedIn && <Login onLogin={loginHandler} />}*/}
            {/*{isLoggedIn && <Home onLogout={logoutHandler} />}*/}
          </main>
        {/*</Switch>*/}


      </BrowserRouter>
  );
}

export default App;
