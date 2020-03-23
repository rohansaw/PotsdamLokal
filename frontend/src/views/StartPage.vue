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
    data: function() {
        return {
            authenticated : false
        }
    },
    components: {
        dashboard,
        landingpage
  } 
}

</script>