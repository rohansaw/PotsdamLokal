<template>
  <div id="app">
    <navigation/>
    <div id="main">
      <router-view/>
    </div>
    <footerKa/>
  </div>
</template>

<script>
import navigation from './components/layout/Navbar'
import footerKa from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    navigation,
    footerKa
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
#app{
    font-family: 'Karla', sans-serif !important;
    background-color: #f2f2f2;
}
.selection-button{
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #ED8182;
    color: #ED8182;
    font-size: 20px;
    font-weight: 600;
}
.selection-button:hover{
    opacity: 0.5;
}
#main {
    min-height: 100vh;
}
</style>
