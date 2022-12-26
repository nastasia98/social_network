import profileReducer from "./profile-reducer";
import messagesReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"
import usersReducer from "../Components/Users/users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store // чтобы обращаться ч/з консольку
export default store;