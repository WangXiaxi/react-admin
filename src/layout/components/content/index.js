import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'utils/loadable'
import { Layout } from 'antd'

const { Content } = Layout

const Home = loadable(() => import('pages/home'))
const Buttons = loadable(() => import('pages/buttons'))

export default class ContentMain extends Component {
  render() {
    return (
      <Content className="layout-mian">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/buttons" exact component={Buttons} />
        </Switch>
      </Content>
    )
  }
}
