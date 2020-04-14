<template>
  <div id="StartPage">
    <dashboard v-if="isUserLoggedIn"/>
    <landingpage v-else/>
  </div>
</template>

<script>
import dashboard from '../components/home/Dashboard'
import landingpage from '../components/home/LandingPage'
import store from '../store/'

export default {
  components: {
    dashboard,
    landingpage
  },
  data: function () {
    return {
      authenticated: false
    }
  },
  computed: {
    isUserLoggedIn () {
      return store.getters.isLoggedIn
    }
  }
}

</script>
