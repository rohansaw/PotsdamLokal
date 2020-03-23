<template>
  <div id="Navigation">
    <b-navbar
      class="padded-nav"
      toggleable="lg"
      type="light">
      <b-navbar-brand to="/">PotsdamLokal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse
        id="nav-collapse"
        is-nav>
        <b-navbar-nav>
          <b-nav-item to="shops">Einkaufen</b-nav-item>
          <b-nav-item to="create-shop">Anbieten</b-nav-item>
          <b-nav-item to="faq">FAQ</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav v-if="authenticated">
            <b-nav-item href="#">Chats</b-nav-item>
            <b-nav-item-dropdown
              text="Profil"
              right>
              <b-dropdown-item href="#">Meine Projekte</b-dropdown-item>
              <b-dropdown-item href="#">Einstellungen</b-dropdown-item>
              <b-dropdown-item href="#">Ausloggen</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav v-else>
            <b-nav-item>Registrieren</b-nav-item>
            <b-nav-item to="login">Einloggen</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      authenticated: false
    }
  }
}
</script>

<style scoped>
#Navigation{
}
@media screen {
  .padded-nav{
    padding: 12px 100px;
  }
}

.navbar-brand{
  color: #ED8182 !important; 
  border-bottom: none !important;
  font-weight: bold;
  font-size: 32px;
}

.nav-link{
  font-size: 16px;
  color: #000 !important; 
  padding: 3px 0px !important;
   margin: 0px 10px; 
}

.router-link-exact-active{
  border-bottom: 2px solid #ED8182;
}

</style>
