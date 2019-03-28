import request from 'utils/request'

// 登录
export const loginByUsername = ({ customNo, password, code, sercetkey }) => {
  const data = {
    customNo,
    password,
    sercetkey,
    plateFormId: 1001,
    code: code.toUpperCase()
  }
  return request({
    url: '/api/admin/jwt/token',
    method: 'post',
    data
  })
}
