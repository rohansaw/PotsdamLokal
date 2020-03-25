<template>
  <div id ="LandingPage">
    <b-jumbotron class="bg-image mb-0">
      <b-container class="intro-text">
        <h1 class="display-3">PotsdamLokal - Einkaufen</h1>
        <p class="lead font-weight-bold">Unterstütze jetzt den lokalen Einzelhandel in Potsdam!</p>
        <h3>In Zeiten von Covid-19 leidet der lokale Einzelhandel stark. Über PotsdamLokal könnt ihr jetzt online mit den Läden in Potsdam in Kontakt treten und Zeitslots zum Abholen der Produkte ausmachen oder euch Produkte liefern lassen</h3>
        <div class="text-center"/>
      </b-container>
    </b-jumbotron>
    <b-container fluid>
      <b-row id="Selection-row">
        <b-col
          class="select-shopping text-center"
          @click="routeTo('shops')">
          <router-link
            to="shops"
            class="selection-button"
            tag="button">Für Käufer</router-link>
          <br><br><p>Du möchtest einkaufen? Durchsuche jetzt Läden in Potsdam</p>
          <img
            src="../../assets/shoppingCart.svg"
            class="intro-image mt-5">
        </b-col>
        <b-col
          class="select-shop text-center"
          @click="routeTo('create-shop')">
          <router-link
            to="create-shop"
            class="selection-button"
            tag="button">Für Verkäufer</router-link>
          <br><br><p>Du hast ein Geschäft in Potsdam und möchtest deine Produkte online anbieten? Erstelle jetzt eine Seite für deinen Laden</p>
          <img
            src="../../assets/shop.svg"
            class="intro-image">
        </b-col>
      </b-row>
      <div id="Info-container"/>
    </b-container>
  </div>
</template>

<script>
import router from '../../router'

export default {
  methods: {
    routeTo (path) {
      router.push(path)
    }
  }
}
</script>

<style scoped>
.bg-image{
  border-radius: 0px;
  color: #ecf0f1;
  height: auto;
  background-color: #ED8182 !important;
}
#Selection-row{
  min-height: 300px;
  font-size: 20px;
  color: #212529;
  cursor: pointer;
}
.select-shopping{
  padding: 50px;
  background-color: #78c0f5;
}
.select-shop {
  padding: 50px;
  background-color: #a9d4f8;
}
#Info-container{
  min-height: 300px;
}
.intro-image{
  height: 25vh;
}
@media (max-width: 767px) {
  .intro-text h1{
    font-size: 40px;
  }
  .intro-text p, h3{
    font-size: 18px !important;
  }
}
</style>
