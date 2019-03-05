import React, { Component } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class NProgressPage extends Component {
  componentWillMount() {
    NProgress.start()
  }
  componentWillUnmount() {
    NProgress.done()
  }
  render() {
    return (
      <React.Fragment />
    )
  }
}

export default NProgressPage