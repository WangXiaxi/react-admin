import { observable, action } from 'mobx'

class UserStore {
  @observable token = '' // token
  @observable userInfo = {} // 用户信息

  // 退出操作
  @action logout = (flag, info = {}) => {
    this.userInfo = {}
    this.token = ''
  }

  // 登陆操作
  @action loginIn = (info) => {

  }
}

export default new UserStore()