
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import themesReducer from './features/themes/themesReducer';
import userReducer from './features/auth/reducer';

const store = createStore(
    combineReducers({
    // login: loginReducer,
    themesReducer,
    userReducer,
    }),
    composeWithDevTools(),
);


export default store

export type RootState = ReturnType<typeof store.getState>;
