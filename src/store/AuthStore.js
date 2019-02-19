import { action, observable } from 'mobx'

class AuthStore {
    @observable isLoading = false
    @action authUserLocal (email, password, remember) {
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }
}

export default new AuthStore()