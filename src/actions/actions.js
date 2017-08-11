import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

// tester!
export function hiGuys() {
    console.log('Hello');
}

// fetchTvs
export function fetchTvs() {
    return function (dispatch) {
        dispatch(fetchTvsRequest());
        axios.get(`${ROOT}/tvs`)
            .then(res => {
                console.log(res.data);
                dispatch(fetchTvsSuccess(res.data.tvs));
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchTvsError(err));
            });
    };
}

export function fetchTvsRequest() {
    return {
        type: types.FETCH_TVS_REQUESTS
    };
}

export function fetchTvsSuccess(tvs) {
    return {
        type: types.FETCH_TVS_SUCCESS,
        payload: tvs
    };
}

export function fetchArticlesError(error) {
    return {
        type: types.FETCH_TVS_ERROR,
        payload: error
    };
}