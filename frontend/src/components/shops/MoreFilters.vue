<template>
  <div id="MoreFilters">
    <ul class="filtersList">
      <filterItem
        :id="1"
        :name="'Nur Geschäfte, die Liefern anzeigen'"/>
      <filterItem
        :id="2"
        :name="'Nur verifizierte Geschäfte anzeigen'"/>
      <filterItem
        :id="3"
        :name="'Nur Geschäfte anzeigen, die heute geöffnet haben'"/>
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
