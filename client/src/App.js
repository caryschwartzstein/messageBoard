import React from 'react';

import './App.css';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Home from './components/Home'
import NavBar from './components/NavBar'
import {Provider} from 'react-redux'
import Store from './store';


function App() {

  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    Store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      Store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

  return (
    <Provider store={Store}>
      <NavBar/>
      <Home/>
    </Provider>
    
  );
}


export default App;
