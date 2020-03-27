import Repository from './Repository'
import router from '../router'

const resource = 'api/user'

export default {
  registerUser (form) {
    return Repository.post(`${resource}/register`, form)
  },
  login (user) {
    return Repository.get(`${resource}/login`, user)
  }
}
