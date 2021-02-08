import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import ApplicationView from './ApplicationView';

ReactDOM.render(
  <Router>
    <ApplicationView />
  </Router>,
  document.getElementById('root')
);
