import { observable, action } from 'mobx'

class UserStore {
    @observable data = { name: 'Renan' }
    @observable isLoading = false

    @action createUser (data) {
        this.data = data
        this.isLoading = true

        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }
}

export default new UserStore()