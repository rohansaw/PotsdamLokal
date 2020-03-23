<template>
  <div id="SkillsFilters">
    Select All | Unselect All
    <ul class="filtersList">
      <filterItem
        v-for="i in 18"
        :key="i"
        :id="i"
        :name="'Programmierung'"/>
    </ul>
  </div>
</template>

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
  columns: 3;
  width: 100%;
  list-style-type: none;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  padding: 0px;
}
#SkillsFilters{
  padding: 20px 0px;
}
</style>
