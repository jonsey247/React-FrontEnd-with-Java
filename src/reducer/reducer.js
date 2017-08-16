import * as types from '../actions/types';

const initialState = {
    tvs: [],
    selectedTvs: [],
    newTv: [],
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
        newState.tvs = action.payload;
        newState.loading = false;
        return newState;
    }

    if (action.type === types.FETCH_TVS_ERRORS) {
        const newState = Object.assign({}, prevState);
        newState.tvs = [];
        newState.loading = false;
        newState.error = action.error;
        return newState;
    }

     if (action.type === types.FETCH_TVS_BY_ID_REQUESTS) {
        const newState = Object.assign({}, prevState);
        newState.loading = true;
        return newState;
    }

    if (action.type === types.FETCH_TVS_BY_ID_SUCCESS) {
        const newState = Object.assign({}, prevState);
        newState.selectedTvs = action.payload;
        newState.loading = false;
        return newState;
    }

    if (action.type === types.FETCH_TVS_BY_ID_ERRORS) {
        const newState = Object.assign({}, prevState);
        newState.tvs = [];
        newState.selectedTvs = [];
        newState.loading = false;
        newState.error = action.error;
        return newState;
    }

    // addNewTv
  if (action.type === types.ADD_TV_POST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.ADD_TV_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.newTv = newState.newTv.push(action.payload);
    newState.loading = false;
    return newState;
  }

  if (action.type === types.ADD_TV_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.tvs = [];
    newState.selectedTvs = {};
    newState.newTv = {},
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

    return prevState;
}

export default reducer;