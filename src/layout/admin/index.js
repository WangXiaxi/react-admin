import React, { Component } from 'react'
import { Layout } from 'antd'
import ContentMain from '../components/content'
import FooterMain from '../components/footer'
import CrumbMain from '../components/crumb'
import LeftMenuMain from '../components/leftMenu'
import TopMenuMain from '../components/topMenu'

export default class Admin extends Component {
  render() {
    return (
      <Layout className="layout-box">
        <TopMenuMain></TopMenuMain>
        <Layout>
          <LeftMenuMain></LeftMenuMain>
          <Layout className="layout-content">
            <CrumbMain></CrumbMain>
            <ContentMain></ContentMain>
            <FooterMain></FooterMain>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
