import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
