import React, { Component } from 'react'
import { Breadcrumb, Icon } from 'antd'
import { inject, observer } from 'mobx-react'

@inject('appStore')
@observer
class CrumbMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {  
    const { appStore: { collapsed, changeCollapsed }} = this.props
    return (
      <Breadcrumb className="layout-breadcrumb">
        <Breadcrumb.Item className="spec-breadcrumb-item">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={changeCollapsed}
          />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default CrumbMain