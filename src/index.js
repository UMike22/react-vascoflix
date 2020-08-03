import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/settings/colors.css';
import './styles/reset.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Video from '../src/Pages/Video/index.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/video/new" component={Video} />
        
          
       
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
