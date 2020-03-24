<template>
  <div id="BranchesFilters">
    Select All | Unselect All
    {{ selected }}
    <ul class="filtersList">
      <filterItem
        v-for="branch in branches"
        :key="branch.value"
        :id="branch.value"
        :name="branch.text"
        @input="pushSelected($event)"
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
    shopRepository.getShopTags()
      .then(res => {
        this.branches = res.data
      })
      .catch(error => console.log(error))
  },
  components: {
    filterItem
  },
  methods: {
    pushSelected (item) {
      if (this.selected.includes(item)) {
        this.selected.splice(this.selected.indexOf(item), 1)
      } else {
        this.selected.push(item)
      }
    }
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
