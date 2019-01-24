import React from 'react' ;
import {Meteor} from 'meteor/meteor';
import {Render} from 'react-dom';
import './imports/startup/accounts-config.js';
import App from '/imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App/>,document.getElementById('react-target'));
});
