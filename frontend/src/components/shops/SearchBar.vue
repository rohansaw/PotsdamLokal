<template>
  <b-col id="#Search">
    <div class="filter-item search-container">
      <input
        :class="{bigger: clicked}"
        class="search"
        type="text"
        placeholder="Suchen..."
        @click="clicked = !clicked">
      <font-awesome-icon icon="search" />
    </div>
  </b-col>
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
.search-container{
  position: absolute;
  right: 0;
}
.search{
  border-style: hidden;
  display: inline-block;
  width: 100%;
  width:200px;
  background-color: #FFF;
  font-weight: 800;
  color: black;
  transition: max-height 0.25s ease-out;
  transition-property: width;
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
