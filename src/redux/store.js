import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer'
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
export const Store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);