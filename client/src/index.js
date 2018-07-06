import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import AppContainer from './Container/Functional/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css'
import{ Provider } from 'react-redux'
import store from './store'

// const oldFetch = window.fetch;
// window.fetch = (url, settings = {}) => {
//   return oldFetch(url, 
//     {...settings,
//       headers: {...settings.headers, authorization: localStorage.getItem("token")}
//     }
//     );
// };

ReactDOM.render(
  <Provider store={store}>
    <App/>   
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
