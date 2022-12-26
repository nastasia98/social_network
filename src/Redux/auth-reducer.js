import {AuthAPI, UsersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false //залогинен ли?
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const authMeThunkCreator = () => async (dispatch) => {
    let response = await AuthAPI.me();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authMeThunkCreator())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;