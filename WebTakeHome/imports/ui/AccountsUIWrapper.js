import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export default class AccountUIWrapper extends Component{
  componentDidMounth(){
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }
  comonentWillUnMounth(){
    Blaze.remove(this.view);
  }

  render(){
    return <span ref = "container" />
  }
}
