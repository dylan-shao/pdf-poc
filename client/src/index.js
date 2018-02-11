import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App1 from './components/App1';
import App2 from './components/App2';
import InputFields from './components/InputFields';

import './index.css';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/part1" component={App1} />
        <Route exact path="/part2" component={App2} />
        <Route exact path="/inputfields" component={InputFields} />
      </Switch>
    </BrowserRouter>
  </div>, 
  document.getElementById('root'));
