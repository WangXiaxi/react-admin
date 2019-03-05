import React, { Component } from 'react'
import Admin from './admin'
import Login from './login'

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
    const { loading, isLogin } = this.state
    return (
      <React.Fragment>
        {
          loading ? <div style={ styles.loadingTitle }>
            加载中。。。
          </div> : (isLogin ? <Admin></Admin> : <Login></Login>)
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