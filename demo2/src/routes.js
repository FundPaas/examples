import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Main from './components/Main';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main}/>
    <Route path='/signup' component={Signup}/>
    <Route path='*' component={NotFound} />
  </Route>
);