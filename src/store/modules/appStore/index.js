import { observable, action } from 'mobx'

class AppStore {
  @observable collapsed = false // left menu flex
  @observable systemName = '自定义系统名称' // system name

  @action changeCollapsed() { // change collapsed
    console.log(this)
    // this.collapsed = false
  }
}

export default new AppStore()