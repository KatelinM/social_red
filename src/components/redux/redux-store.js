import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

// let store = createStore(reducers, applyMiddleware(thunk));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store