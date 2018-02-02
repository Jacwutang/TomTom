import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = (preLoadedState = {} ) => {
  return(
    createStore(
      rootReducer,
      preLoadedState,
      applyMiddleware(thunk)
  ));

};

export default configureStore;
