<template>
  <b-container class="text-center">
    <h2>Login</h2>
    <b-form @submit="login">
      <b-form-input
        type="text"
        placeholder="Emailaddresse..."
        name="email" /><br>
      <b-form-input
        placeholder="Passwort..."
        type="password"
        name="password" /><br>
      <b-button type="primary">Login</b-button>
    </b-form>
    <p class="mt-4">Noch nicht registriert? <router-link to="register">Jetzt registrieren</router-link></p>
  </b-container>
</template>

<script>
import router from '../../router'
import axios from 'axios'
export default {
  name: 'Login',
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = 'user@email.com'
      let password = 'password'
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            router.push('/dashboard')
          })
          .catch((errors) => {
            console.log('Cannot log in')
          })
      }
      login()
    }
  }
}
</script>
