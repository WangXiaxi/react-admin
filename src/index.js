import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/theme/index.less'
import Layout from './layout'
import store from './store'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider {...store}>
      <Layout />
    </Provider>
  </Router>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
