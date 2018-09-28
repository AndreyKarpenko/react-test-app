import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import store from './store/store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from "./actions/authAction";
import { logoutUser } from "./actions/authAction";
import './App.css';

// check for token
if(localStorage.jwtToken) {
    // set auth token
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuth
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <Route exact path={'/'} component={Landing}/>
                        <div className={'container'}>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
