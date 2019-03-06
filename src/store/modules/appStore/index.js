import { observable, action } from 'mobx'

class AppStore {
  @observable collapsed = false // left menu flex
  @observable systemName = '自定义系统名称' // system name

  @action changeCollapsed = () => { // change collapsed
    this.collapsed = !this.collapsed
  }
}

export default new AppStore()