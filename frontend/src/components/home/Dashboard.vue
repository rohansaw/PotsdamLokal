<template>
  <div>
    <h2>Dashboard</h2>
    <p>Willkommen zurück {{ user.name }}</p>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../../router'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        name: ''
      }
    }
  },
  mounted () {
    console.log('entered')
    this.getUserData()
  },
  methods: {
    getUserData: function () {
      let self = this
      axios.get('/api/user')
        .then((response) => {
          console.log(response)
          self.$set(this, 'user', response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push('/')
        })
    }
  }
}
</script>
