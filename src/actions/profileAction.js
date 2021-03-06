import axios from 'axios';

import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS} from "./types";

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('http://localhost:5000/api/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
};

export const createProfile = (profileData, history) => dispatch => {
    axios.post('http://localhost:5000/api/profile', profileData)
        .then(() => history.push('/dashboard'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        })
};

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

export const clearProfileLoading = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};