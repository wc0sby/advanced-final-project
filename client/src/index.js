import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './Container/Presentational/AuthenticatedContainer'
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
    <Router>
      <Route path="/:filter?" component={App}/>
    </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
