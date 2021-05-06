import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import wordReducer from './wordReeducer';

const rootReducers = combineReducers({
user: userReducer,
  words: wordReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));