import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import screenfull from 'screenfull'
import { Link } from 'react-router-dom'

const { Header } = Layout

class TopMenuMain extends Component {
  
  state = {
    icon: 'arrows-alt', // screenful icon
  }

  componentDidMount () {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
      })
    })
  }

  componentWillUnmount () {
    screenfull.off('change')
  }

  screenfullToggle = () => { // screenful action
    if (screenfull.enabled) screenfull.toggle()
  }

  render() {
    return (
      <Header className="layout-header">
        <div className="layout-logo">自制管理系统</div>
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['2']}
          className="layout-menu-hor"
        >
          <Menu.Item key="1"><Link to="/buttons">nav 1</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/">nav 2</Link></Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <ul className="layout-info">
          <li><Icon type={this.state.icon} onClick={this.screenfullToggle} /></li>
          {/* <li><Icon /></li>
          <li><Icon /></li> */}
        </ul>
      </Header>
    )
  }
}

export default TopMenuMain