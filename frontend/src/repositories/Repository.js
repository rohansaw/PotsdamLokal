import axios from 'axios'

<<<<<<< HEAD
const baseDomain = 'https://jsonplaceholder.typicode.com'
const baseUrl = `${baseDomain}:3000`
=======
const baseDomain = 'localhost'
const baseURL = `${baseDomain}:3000`
>>>>>>> 0c081b4b4fde636b9a1ec406719c999c08100b60

export default axios.create({
  baseURL,
  headers: {}
})
