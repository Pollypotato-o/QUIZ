import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './features/auth/reducer';

const store = createStore(combineReducers({
  userReducer
   })
   );

export default store;

export type RootState = ReturnType<typeof store.getState>;