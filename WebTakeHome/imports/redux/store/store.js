import React from 'react';
import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
}from 'redux';

import {
  createLogger
}from 'redux-logger';

import ReduxThunk from 'redux-thunk';
import{
  routerForBrowser
}from 'redux-little-router';
import{
  createDevTools
}from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import productReducer from '../../../imports/redux/reducers/productReducer';

const Products = new Mongo.Collection('Products');

const DevTools = createDevTools(
  <
    DockMonitor toggleVisibilityKey = 'ctrl-h'
    changePositionKey = 'ctrl-q'
    defaultIsVisible = {
      true
    }>

    <
    LogMonitor theme = 'tomorrow'/>

    </DockMonitor>
);

const routes = {
  '/':{},
};

const {
  reducer,
  enhancer,
  middleware,
} = routerForBrowser({
  routes,
});

const initialState = {
  operation:(x,y) => " "
};

const rootReducer = function (state = initialState,action= {}){
  return{
    operation: operationReducer(state.operation, action)
  };
};


const logger = createLogger();

const enhancers = [
  enhancer,
  applyMiddleware (middleware,ReduxThunk,logger),
  window.devToolsExtension?
  window.devToolsExtension(); f => f
];

const Store = createStore(
  combineReducers({
    router:reducer,
    rootReducer
  }),

  window._INITIAL_STATE || {},
  compose(...enhancers)
);
export default Store;
