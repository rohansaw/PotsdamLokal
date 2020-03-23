import ShopsRepository from './shopsRepository'

const repositories = {
  shops: ShopsRepository
}

export default {
  get: name => repositories[name]
}
