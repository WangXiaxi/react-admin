import request from '@/utils/request'

// 登录
export function loginByUsername(customNo, password, code, sercetkey) {
  const data = {
    customNo,
    password,
    sercetkey,
    plateFormId: 1001,
    code: code.toUpperCase()
  }
  return request({
    url: '/admin/jwt/token',
    method: 'post',
    data
  })
}
