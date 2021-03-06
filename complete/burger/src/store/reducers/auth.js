import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    redirectPath: '/'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, {
                error: null, 
                loading: true
            });
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false,
            });
        case actionTypes.AUTH_FAILED:
            return updateObject(state, {
                error: action.error,
                loading: false,
            });
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, {
                tokent: null,
                userId: null,
            });
        case actionTypes.AUTH_REDIRECT:
            return updateObject(state, {
                redirectPath: action.path,
            });
        default:
            return state;
    }
};

export default reducer;