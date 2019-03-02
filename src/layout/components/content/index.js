import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'utils/loadable'

const Home = loadable(() => import('pages/home'))
const Buttons = loadable(() => import('pages/buttons'))

export default class ContentMain extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/buttons" exact component={Buttons} />
        </Switch>
      </div>
    )
  }
}
