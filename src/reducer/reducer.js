import * as types from '../actions/types';

const initialState = {
    Tvs: [],
    selectedTvs: {},
    loading: false,
    error: null
};

function reducer(prevState = initialState, action) {
    if (!action) return prevState;

    if (action.type === types.FETCH_TVS_REQUESTS) {
        const newState = Object.assign({}, prevState);
        newState.loading = true;
        return newState;
    }

    if (action.type === types.FETCH_TVS_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.Tvs = action.payload;
        newState.loading = false;
        return newState;
    }

    if (action.type === types.FETCH_TVS_ERRORS) {
        const newState = Object.assign({}, prevState);
        newState.Tvs = [];
        newState.loading = false;
        newState.error = action.error;
        return newState;
    }
}

export default reducer;