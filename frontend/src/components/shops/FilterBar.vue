<template>
  <div
    id="filterbar"
    class="sticky-top">
    <b-container class="full-height">
      <b-row>
        <div
          class="col-md-6"
          id="filters">
          <div class="row">
            <div
              class="col-md-4 filter-item"
              @click="toggleFilterMenu('industries')">
              <font-awesome-icon
                class="icon-padded"
                icon="pencil-ruler" />
              Branche
              <font-awesome-icon
                class="ml-auto"
                icon="angle-down" />
            </div>
            <div
              class="col-md-4 filter-item"
              @click="toggleFilterMenu('more')">
              <font-awesome-icon
                class="icon-padded"
                icon="ellipsis-h" />
              Mehr Filter
              <font-awesome-icon
                class="ml-auto"
                icon="angle-down" />
            </div>
            <div
              class="col-md-4 filter-item"
              @click="$emit('submit', search)">
              <font-awesome-icon
                class="icon-padded"
                icon="search" />
              Anwenden
            </div>
          </div>
        </div>
        <searchBar/>
      </b-row>
    </b-container>
    <transition name="dropmenu">
      <div
        v-if="selectedFilterMenu!=''"
        class="dropdown-filters">
        <b-container>
          <industriesFilters
            v-if="selectedFilterMenu==='industries'"
            @changed="pushSelected($event)"/>
          <moreFilters v-if="selectedFilterMenu==='more'"/>
        </b-container>
      </div>
    </transition>
  </div>
</template>

<script>
import industriesFilters from './IndustriesFilters'
import categoryFilters from './CategoryFilters'
import moreFilters from './MoreFilters'
import searchBar from './SearchBar'

export default {
  data () {
    return {
      selectedFilterMenu: '',
      search: {
        industries: [],
        categories: null,
        text: null
      }
    }
  },
  components: {
    industriesFilters,
    categoryFilters,
    moreFilters,
    searchBar
  },
  methods: {
    toggleFilterMenu: function (type) {
      if (this.selectedFilterMenu === '' || this.selectedFilterMenu !== type) {
        this.selectedFilterMenu = type
      } else {
        this.selectedFilterMenu = ''
      }
    },

    pushSelected (item) {
      if (this.search.industries.includes(item)) {
        this.search.idustries.splice(this.search.industries.indexOf(item), 1)
      } else {
        this.search.industries.push(item)
      }
    }

  }
}
</script>

<style>
#filterbar{
  z-index: 19;
  background-color:  #FFF;
}
@media (max-width: 767px){
  .sticky-top{
    position: initial !important;
  }
}
.filter-item{
  height: 48px;
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  padding: 15px;
  font-weight: 800;
  display:flex;
  align-items: center;
  cursor: pointer;
}
.icon-padded{
  padding-right: 10px;
  font-size: 28px;
}
.dropdown-filters{
  text-align: left;
}
</style>
