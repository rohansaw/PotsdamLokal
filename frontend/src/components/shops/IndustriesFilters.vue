<template>
  <div id="IndustriesFilters">
    Select All | Unselect All
    <ul class="filtersList">
      <filterItem
        v-for="industry in industries"
        :key="industry.value"
        :id="industry.value"
        :name="industry.text"
        @input="$emit('changed', $event)"
      />
    </ul>
  </div>
</template>

<script>
import filterItem from './FilterItem'
import RepositoryFactory from '../../repositories/RepositoryFactory'
const shopRepository = RepositoryFactory.get('shops')

export default {
  data () {
    return {
      industries: []
    }
  },
  mounted () {
    shopRepository.getShopIndustries()
      .then(res => {
        this.industries = res.data
      })
      .catch(error => console.log(error))
  },
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
#IndustriesFilters{
  padding: 20px 0px;
}
</style>
