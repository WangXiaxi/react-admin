import React, { Component } from 'react'
import Admin from './admin'
import Login from 'pages/login'
import { Switch, Route } from 'react-router-dom'

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
      <React.Fragment>
        {
          loading ? <div style={ styles.loadingTitle }>
            加载中。。。
          </div> : <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
          </Switch>
        }
      </React.Fragment>
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