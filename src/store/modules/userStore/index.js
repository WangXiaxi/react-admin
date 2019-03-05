import { observable, action } from 'mobx'

class UserStore {
  @observable isLogin = false // 登陆状态
  @observable userInfo = {} // 用户信息

  @action logout(flag, info = {}) {
    this.userInfo = info  //设置登录用户信息
    if (flag) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}

export default new UserStore()