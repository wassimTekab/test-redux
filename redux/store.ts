import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
