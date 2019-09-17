import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import QuoteGenerator from '../src/containers/quote-generator';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={QuoteGenerator} />
      <Switch>
        <Route path='/quote-generator' components={QuoteGenerator} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
