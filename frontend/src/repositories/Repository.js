import axios from 'axios'

const baseDomain = 'https://jsonplaceholder.typicode.com'
const baseUrl = `${baseDomain}:3000`

export default axios.create({
  baseUrl,
  headers: {}
})
