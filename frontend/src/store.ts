/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import themesReducer from './features/themes/themesReducer';

const store = createStore(
    combineReducers({
    // login: loginReducer,
    themes: themesReducer,
    // static: reducerStatic,
    }),
    composeWithDevTools(),
);


export default store

export type RootState = ReturnType<typeof store.getState>;
