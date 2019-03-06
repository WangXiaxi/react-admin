import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { inject, observer } from 'mobx-react'

const { SubMenu } = Menu
const { Sider } = Layout

@inject('appStore', 'userStore')
@observer
class LeftMenuMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { appStore } = this.props
    return (
      <Sider collapsible trigger={null} collapsed={appStore.collapsed} width={200}>
        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} className="layout-menu-ver">
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
    )
  }
}
export default LeftMenuMain