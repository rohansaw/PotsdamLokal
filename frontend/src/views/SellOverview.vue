<template>
  <div id="SellPage">
    <div v-if="notLoggedIn">
      <b-jumbotron class="bg-image mb-0 text-center">
        <b-container>
          <h2 class="mb-3">Du hast ein geschäft in Potsdam? <h3>Erstelle jetzt deinen Webshop!</h3></h2>

          <h5 class="mt-5">Bereits registriert? <router-link to="login">Jetzt Einloggen</router-link></h5>
        </b-container>
      </b-jumbotron>

      <registerShop />
    </div>
    <div v-else>
      Produkte hier hochladen
    </div>
  </div>
</template>

<script>
import registerShop from '../components/auth/RegisterShop'

export default {
  data () {
    return {
      notLoggedIn: true
    }
  },
  components: {
    registerShop
  }
}
</script>

<style scoped>
.bg-image{
  border-radius: 0px;
  color: #ecf0f1;
  height: auto;
  background-color: #ED8182;
}
</style>