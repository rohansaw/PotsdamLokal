import ShopsRepository from './shopsRepository'
import UsersRepository from './usersRepository'

const repositories = {
  shops: ShopsRepository,
  users: UsersRepository
}

export default {
  get: name => repositories[name]
}
