import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';


export const registerUser = (userData, userHistory) => dispatch => {
    axios.post('http://localhost:5000/api/users/register', userData)
        .then(() => userHistory.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginUser = (userData) => dispatch => {
    axios.post('http://localhost:5000/api/users/login', userData)
        .then(res => {
            // Save to localstorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded =>  {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};