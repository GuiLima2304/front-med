import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Test from './pages/Test'
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
