import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/theme/index.less'
import 'assets/styles/common/animate.css'
import Layout from './layout'
import store from './store'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider {...store}>
    <Layout />
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
