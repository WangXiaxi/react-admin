import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom' // Route, Redirect,
// import Admin from './admin'
// import Login from 'pages/login'
// import Error404 from 'pages/404'
import FrontendAuth from 'components/frontendAuth'
import { routerConfig } from 'routes'

export default class Layout extends Component {
  state = {
    loading: true, // loading page
    isLogin: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        isLogin: true
      })
    }, 100)
  }

  render() {
    const { loading } = this.state
    return (
      <Router>
        {
          loading ? <div style={ styles.loadingTitle }>
            加载中。。。
          </div> : <Switch>
            <FrontendAuth config={routerConfig} />
            {/* <Route path="/" exact component={Admin} />
            <Route path="/admin"exact component={Admin} />
            <Route path="/login"exact component={Login} />
            <Route path="/404"exact component={Error404} />
            <Redirect to="/404" /> */}
          </Switch>
        }
      </Router>
    )
  }
}

const styles = {
  loadingTitle: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginLeft: -45,
    marginTop: -18,
    color:'#000',
    fontWeight: 500,
    fontSize: 24
  },
}