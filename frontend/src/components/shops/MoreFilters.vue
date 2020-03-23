<template>
  <div id="MoreFilters">
    <ul class="filtersList">
      <filterItem
        :id="1"
        :name="'Meine gespeicherten Interessen zur Suche nutzen'"/>
      <filterItem
        :id="2"
        :name="'Meine gespeicherten Fähigkeiten zur Suche nutzen'"/>
      <filterItem
        :id="3"
        :name="'Projekte von Organisationen ausblenden'"/>
    </ul>
  </div>
</template>

<!-- Später dynamisch nach Einträgen aus der Datenbank anzeigen -->
<script>
import filterItem from './FilterItem'
export default {
  components: {
    filterItem
  }

}
</script>

<style scoped>
.filtersList{
    width: 100%;
    list-style-type: none;
    padding: 20px 0px;
}
</style>
