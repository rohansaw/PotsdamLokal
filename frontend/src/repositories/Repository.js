import axios from 'axios'

const baseDomain = 'localhost'
const baseURL = `http://${baseDomain}:3000`

export default axios.create({
  baseURL,
  headers: {'Access-Control-Allow-Origin': '*'}
})
