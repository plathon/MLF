import { observable, action } from 'mobx'

class PasswordStore {
    @observable isLoading = false

    @action resetPassword (email) {
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }

    @action updatePassword (password, confirm) {
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }
}

export default new PasswordStore()