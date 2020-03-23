import Repository from './Repository'
import router from '../router'

const resource = '/shops'

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
      .then(response => {
        return response.data
      })
      .catch(error => console.log('An error occured', error))
  },

  getShopBranches () {
    return Repository.get(`${resource}/branches`).then(response => {
      return response.data
    })
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
