import Repository from './Repository'

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
  }
}
