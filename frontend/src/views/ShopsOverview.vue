<template>
  <div id="Projects">
    <b-jumbotron class="bg-image mb-0 text-center">
      <h1>Suche nach Läden in Potsdam</h1>
      <h2>Finde Läden, die das Produkt anbieten, dass du suchst</h2>
    </b-jumbotron>
    <!-- bar, die oben andockt: Searchbox, Causes (Mit icons?), skills (option: use my profile), loction, mehr(NGO/Privat) -->
    <shopslist/>
  </div>
</template>

<script>
import shopslist from '../components/shops/ShopList'

export default {
  components: {
    shopslist
  },
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
.bg-image{
  border-radius: 0px;
  color: #ecf0f1;
  height: 300px;
  background-color: #ED8182;
}
/* .selection-button{ */
/*   color: #FFF !important; */
/*   border-color: #FFF !important; */
/* } */
</style>
