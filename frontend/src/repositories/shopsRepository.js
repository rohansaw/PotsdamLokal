import Repository from './Repository'
import router from '../router'

const resource = 'api/shops'

export default {
  getShopDetail (aShop) {
    return Repository.get(`${resource}/${aShop}`)
  },

  getShopsPage (pageNumber, query) {
    return Repository.get(`${resource}`, {
      params: {
        page: pageNumber,
        filters: query
      }
    })
  },

  getShopIndustries () {
    return Repository.get(`${resource}/industries`)
  },

  registerShop (form) {
    return Repository.post(`${resource}/create`, form)
      .then(response => {
        console.log('Shop Added')
        router.push('/projects')
      })
      .catch(errors => {
        console.log('Could not add Project')
      })
  }
}
