import axios from 'axios'

const baseDomain = 'localhost'
const baseURL = `${baseDomain}:3000`

export default axios.create({
  baseURL,
  headers: {}
})
