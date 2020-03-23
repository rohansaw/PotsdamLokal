import Repository from './Repository'
import router from '../router'

const resource = 'api/shops'

export default {
  getShopDetail (aShop) {
    return Repository.get(`${resource}/${aShop}`)
  },

  getShopsPage (pageNumber) {
    return Repository.get(`${resource}`, {
      params: {
        page: pageNumber
      }
    })
  },

  getShopBranches () {
    return Repository.get(`api/branches/`)
  },

  postNewShop (form) {
    return Repository.post(`${resource}/createProject`, form)
      .then(response => {
        console.log('Project Added')
        router.push('/projects')
      })
      .catch(errors => {
        console.log('Could not add Project')
      })
  }
}
