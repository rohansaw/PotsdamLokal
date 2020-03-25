<template>
  <div
    class="col-md-6"
    id="#Search">
    <div class="filter-item search-container">
      <input
        :class="{bigger: clicked}"
        class="search"
        type="text"
        placeholder="Suchen..."
        @click="clicked = !clicked">
      <font-awesome-icon icon="search" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clicked: false
    }
  }
}
</script>

<style scoped>
@media (min-width: 768px){
  .search{
    border-style: hidden;
    display: inline-block;
    width:200px;
    background-color: #FFF;
    font-weight: 800;
    color: black;
    transition: max-height 0.25s ease-out;
    transition-property: width;
  }
  .search-container{
  position: absolute;
  right: 0;
}
}
@media (max-width: 767px){
  .search, .bigger{
    width: 100% !important;
    background-color: #FFF;
    font-weight: 800;
    color: black;
    border-style: hidden;
  }
  .filter-item {
    border: none;
    padding: 0px;
  }
}
.search:focus{
  outline: none;
}
.bigger{
  transition: max-height 0.25s ease-out;
  width: 400px;
  transition-duration: 0.5s;
  transition-property: width;
}
</style>
