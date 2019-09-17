import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import QuoteGenerator from '../src/containers/quote-generator';
import './index.css';

ReactDOM.render(
  <QuoteGenerator />,
  document.getElementById('root'),
);

serviceWorker.unregister();
