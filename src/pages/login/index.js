import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import PromptBox from 'components/promptBox'
import './index.less'
import { appConfig } from '../../config/appConfig'

@Form.create()
class Login extends Component {
  state = {
    imgURL: appConfig.generateCode
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleSubmit = (e) => { // 提交操作
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleChange = (e) => {
    console.log(this.state)
  }

  render() {
    const { form: {getFieldDecorator, getFieldError} } = this.props
    const { imgURL } = this.state
    console.log(imgURL)
    const rules = {
      customNo: [{ required: true, message: '请输入用户名！' }],
      password: [{ required: true, message: '请输入密码！' }],
      code: [{ required: true, message: '请输入验证码' }],
    }
    const calculateWidth = (arr) => { //计算宽度
      return 30 + arr[0].length*15
    }
    return (
      <div className="scope-login-box">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item help={getFieldError('customNo') && <PromptBox info={getFieldError('customNo')} width={calculateWidth(getFieldError('customNo'))}/>}>
            {getFieldDecorator('customNo', { rules: rules.customNo }) (
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </Form.Item>
          <Form.Item help={getFieldError('password') && <PromptBox info={getFieldError('password')} width={calculateWidth(getFieldError('password'))}/>}>
            {getFieldDecorator('password', { rules: rules.password }) (
              <Input type="password" prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
            )}
          </Form.Item>
          <Form.Item help={getFieldError('code') && <PromptBox info={getFieldError('code')} width={calculateWidth(getFieldError('code'))}/>}>
            {getFieldDecorator('code', { rules: rules.code }) (
              <div>
                <Input prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="验证码" />
                <img className="captcha" alt="验证码" src={imgURL} onClick={this.handleChange} />
              </div>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login