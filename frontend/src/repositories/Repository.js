import axios from 'axios'

const baseDomain = 'https://jsonplaceholder.typicode.com'
const baseUrl = `${baseDomain}`

export default axios.create({
  baseUrl,
  headers: {}
})
