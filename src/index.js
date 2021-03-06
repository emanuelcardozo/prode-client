import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import config from 'config/config'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store, { history } from './config/store'
import HttpsRedirect from 'react-https-redirect'
import 'assets/css/material-dashboard-react.css?v=1.4.1'
import registerServiceWorker from './registerServiceWorker'

if( config.raven ) window.Raven.config(config.raven).install()

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <Router history={history}>
        <App />
      </Router>
    </HttpsRedirect>

  </Provider>,
  document.getElementById('root')
)

if(process.env.NODE_ENV !== 'production') { registerServiceWorker() }
