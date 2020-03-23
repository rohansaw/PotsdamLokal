<template>
  <div id="BranchesFilters">
    Select All | Unselect All
    <ul class="filtersList">
      <filterItem
        v-for="branch in branches"
        :key="branch.value"
        :id="branch.value"
        :name="branch.text"
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
      branches: [],
      selected: []
    }
  },
  mounted () {
    shopRepository.getShopBranches()
    .then(res => {
        console.log(res.data)
        this.branches = res.data

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
#BranchesFilters{
  padding: 20px 0px;
}
</style>
