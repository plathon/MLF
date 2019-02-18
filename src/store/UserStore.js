import { observable } from 'mobx'

class UserStore {
    @observable data = []
}

let store = window.store = new UserStore

export default store