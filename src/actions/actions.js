import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';


// fetchTvs
export function fetchTvs() {
    return function (dispatch) {
        dispatch(fetchTvsRequest());
        axios.get(`${ROOT}/tvs`)
            .then(res => {
                dispatch(fetchTvsSuccess(res.data));
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

export function fetchTvsError(error) {
    return {
        type: types.FETCH_TVS_ERROR,
        payload: error
    };
}

// fetchTvsByID
export function fetchTvsByID(id) {
    return function (dispatch) {
        dispatch(fetchTvsByIDRequest(id));
        axios.get(`${ROOT}/tvs/${id}`)
            .then(res => {
                dispatch(fetchTvsByIDSuccess(res.data));
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchTvsByIDError(err));
            });
    };
}

export function fetchTvsByIDRequest(id) {
    return {
        type: types.FETCH_TVS_BY_ID_REQUESTS,
        id: id
    };
}

export function fetchTvsByIDSuccess(tv) {
    return {
        type: types.FETCH_TVS_BY_ID_SUCCESS,
        payload: tv
    };
}

export function fetchTvsByIDError(error) {
    return {
        type: types.FETCH_TVS_BY_ID_ERROR,
        payload: error
    };
}

// addnewTv
export function addTv(data) {
    return function (dispatch) {
        dispatch(addTvPost(data));
        axios.post(`${ROOT}/tvs/-1`, data)
            .then(res => {
                console.log('new tv res: ', res);
            })
            .catch(err => {
                console.log(err);
                dispatch(addTvError(err));
            });
    };
}

export function addTvPost(tvModel, wattage) {
    return {
        type: types.ADD_TV_POST,
        tvModel: tvModel,
        wattage: wattage
    };
}

// Function is not needed at this time
// export function addTvSuccess(newtv) {
//     return {
//         type: types.ADD_TV_SUCCESS,
//         payload: newTv
//     };
// }

export function addTvError(error) {
    return {
        type: types.ADD_TV_ERROR,
        payload: error
    };
}