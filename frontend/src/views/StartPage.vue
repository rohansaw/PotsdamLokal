<template>
  <div id="StartPage">
    <dashboard v-if="authenticated"/>
    <landingpage v-else/>
  </div>
</template>

<script>
import dashboard from '../components/home/Dashboard'
import landingpage from '../components/home/LandingPage'

export default {
  components: {
    dashboard,
    landingpage
  },
  data: function () {
    return {
      authenticated: false
    }
  }
}

</script>
