<template>
  <div id ="LandingPage">
    <b-jumbotron class="bg-image mb-0">
      <b-container class="intro-text">
        <h1 class="display-3">PotsdamLokal - Einkaufen</h1>
        <p class="lead font-weight-bold">Das lokale Einkaufs- & Liefernetzwerk in Potsdam!</p>
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
            tag="button">Für Käufer:innen</router-link>
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
            tag="button">Für Verkäufer:innen</router-link>
          <br><br><p>Du hast ein Geschäft in Potsdam und möchtest deine Produkte online anbieten? Erstelle jetzt dauerhaft kostenlos eine Seite für deinen Laden</p>
          <img
            src="../../assets/shop.svg"
            class="intro-image">
        </b-col>
      </b-row>
      <div id="Info-container" >
        <b-container class="pt-5 pb-5 text-center">
          <b-row >
            <b-col>
              <img
                src="../../assets/groceries.svg"
                class="img-feature">
              <p>Such online nach Geschäften in deiner Nähe und kaufe trotz der schwierigen Situation lokal ein. Bezahlen kannst du kontaktlos online oder Bar bei der Übergabe</p>
            </b-col>
            <b-col>
              <img
                src="../../assets/shop-presentation.svg"
                class="img-feature">
              <p>Nehme einfach Kontakt mit dem Laden auf und schreibe deine Bestellung. Der Laden wird dich über Verfügbarkeit informieren und dir ein Angebot schicken.</p>
            </b-col>
            <b-col>
              <img
                src="../../assets/delivery.svg"
                class="img-feature">
              <p>Lasse dir Produkte direkt vor die Haustür liefern. Alternativ kannst du Zeitslot zum abholen der bereits rausgesuchten Produkte machen</p>
            </b-col>
          </b-row>
        </b-container>
        <div id="Newest-container" class="text-center pt-5">
          Hier Geschäfte die neu dabei sind
        </div>
      </div>
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
  background-color: #a9d4f8;
}
.select-shop {
  padding: 50px;
  background-color: #B1D8F8;
}
#Info-container{
  min-height: 300px;
}
#Newest-container{
  min-height: 300px;
  background-color: #FFF;
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
.img-feature{
  height: 140px;
  margin-bottom: 20px;
}
</style>
