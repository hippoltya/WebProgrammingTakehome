import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AccountUIWrapper from './AccountUIWrapper.js';
import {combineReducers,compose,createStore,applyMiddleware} from 'redux';
import {push,routerForBrowser,initializeCurrentLocation,initialState,Fragment,RoutedProvider,Link} from 'redux-little-router';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import Store from '../../imports/redux/store/store.js';

export default class App Extends Component {
  <AccountUIWrapper/>
  {this.props.currentUser ?
          <form className = "new-product" onSubmit = {this.handleSubmit.bind(this)}>
            <input
                type="text"
                ref = "textInput"
                placeholder= "Type Product"
            />
        </form> : ''
  }
  Product.insert({
    text,
    CreatedAt new Date(),
    owner: Meteor.userId(),
    username:Meteor.user().username,
  });

render(){
  console.log(Store)
  return(
      product:Product.find({},{sort:{createdAt:-1 }}).fetch(),
      inCompleteCount:Product.find({checked : {line:true}}).count(),
      currentUser:Meteor.user(),
      <Provider store = {Store}>
        <div>
          <Hello/>
        </div>
      </Provider>

  )(App); }}
