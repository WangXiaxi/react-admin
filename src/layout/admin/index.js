import React, { Component } from 'react'
import screenfull from 'screenfull'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import ContentMain from '../components/content'
import { HashRouter as Router, Link } from 'react-router-dom'

const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

export default class Admin extends Component {
  state = {
    collapsed: false, // left nav panel
    icon: 'arrows-alt' // screenful icon
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

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  screenfullToggle = () => { // screenful action
    if (screenfull.enabled) screenfull.toggle()
  }
  render() {
    return (
      <Router>
        <Layout className="layout-box">
          <Header className="layout-header">
            <div className="layout-logo">自制管理系统</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
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
          <Layout>
            <Sider
              collapsible
              trigger={null}
              collapsed={this.state.collapsed}
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                className="layout-menu-ver"
              >
                <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">nav 1</span></span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" /><span className="nav-text">nav 2</span></span>}>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" /><span className="nav-text">nav 3</span></span>}>
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="layout-content">
              <Breadcrumb className="layout-breadcrumb">
                <Breadcrumb.Item className="spec-breadcrumb-item">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content className="layout-mian">
                <ContentMain></ContentMain>
              </Content>
              <Footer className="layout-footer">by wangxiaoxing</Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
