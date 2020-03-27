<template>
  <div>
    <div v-if="step === 1">
      <b-container id="RegisterShop" class="mt-5">
        <p><b>Schritt 1: </b>Erstellen sie ihren Account zum Einloggen<br></p>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(firstStepDone)">
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
              <b-form-input
                v-model="form.email"
                type="text"
                placeholder="Emailaddresse..."
                name="email" /> <span>{{ errors[0] }}</span><br>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required" v-slot="{ errors }">
              <b-form-input
                placeholder="Passwort..."
                v-model="form.password"
                type="password"
                name="password" /><span>{{ errors[0] }}</span><br>
            </ValidationProvider>
            <ValidationProvider name="passwordrepeat" rules="required|confirmed:password" v-slot="{ errors }">
              <b-form-input
                placeholder="Passwort bestätigen..."
                v-model="form.passwordRepeat"
                type="password"
                name="password-repeat" /><span>{{ errors[0] }}</span><br>
              <b-button type="submit" class="mt-3">Next</b-button>
            </ValidationProvider>
          </form>
        </ValidationObserver>
      </b-container>
    </div>
    <createShopForm
      v-if="step === 2"
      @back="step = 1"
      @submit="submitForm($event)"/>
  </div>
</template>

<script>
import createShopForm from '../shops/CreateShop'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules'
import RepositoryFactory from '../../repositories/RepositoryFactory'

const usersRepositoy = RepositoryFactory.get('users')
const shopsRepositoy = RepositoryFactory.get('shops')

extend('email', {
  ...email,
  message: 'Bitte gebe eine gültige Email ein'
})

extend('required', {
  ...required,
  message: 'Dieses Feld muss ausgefüllt werden'
})

extend('confirmed', {
  ...confirmed,
  message: 'Die Passwörter stimmen nicht überein'
})

export default {
  data () {
    return {
      step: 1,
      form: {
        email: '',
        password: '',
        passwordRepeat: '',
        shopInformation: {}
      }
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    createShopForm
  },
  methods: {
    firstStepDone () {
      this.step = 2
    },
    submitForm (evt) {
      this.form.shopInformation = evt
      usersRepositoy.registerUser({email: this.form.email, password: this.form.password})
        .then(resp => {
          this.form.shopInformation['ownerEmail'] = this.form.email
          shopsRepositoy.registerShop(this.form.shopInformation)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>