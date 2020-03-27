<template>
  <div>
    <b-jumbotron class="bg-image mb-0">
      <b-container class="intro-text">
        <h1 class="display-4">Jetzt Registrieren!</h1>
        <p class="lead">Wähle die entsprechende Option aus</p>
      </b-container>
    </b-jumbotron>
    <b-row id="Selection-row">
      <b-col
        class="select-shopping text-center"
        @click="routeTo('sell')">
        <router-link
          to="sell"
          class="selection-button"
          tag="button">Ich habe ein Geschäft in Potsdam</router-link>
        <br><br><p>Du hast ein Geschäft in Potsdam und möchtest deine Waren online zum Versand oder zur Abholung anbieten?</p>
        <img
          src="../../assets/shop.svg"
          class="intro-image">
      </b-col>
      <b-col
        class="select-shop text-center"
        @click="routeTo('register-deliveryman')">
        <router-link
          to="register-deliveryman"
          class="selection-button"
          tag="button">Ich möchte Waren ausliefern</router-link>
        <br><br><p>Du möchtest Bestellungen bei den Läden abholen und ausliefern?</p>
        <img
          src="../../assets/delivery.svg"
          class="intro-image">
      </b-col>
    </b-row>
    <b-container class="text-center">
      <p>Bereits registriert? <router-link to="login">Jetzt einloggen</router-link></p>
    </b-container>
  </div>
</template>

<style scoped>
.bg-image{
  text-align: center;
  border-radius: 0px;
  color: #ecf0f1;
  height: auto;
  background-color: #ED8182 !important;
  padding: 30px;
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
.intro-image{
  height: 15vh;
}
</style>
