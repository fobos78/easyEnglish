import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import wordReducer from './wordReeducer';


export interface rootReducersType {
  user: any,
  words: any,
  error: any,
}

const rootReducers = combineReducers({
  user: userReducer,
  words: wordReducer,
  error: errorReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));