import Repository from './Repository'

const resource = 'api/user'

export default {
  registerUser (form) {
    return Repository.post(`${resource}/register`, form)
  },
  login (user) {
    return Repository.post(`${resource}/login`, user)
  }
}
