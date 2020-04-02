<template>
  <div id="ShopList">
    <filterbar @submit="newSearch($event)"/>
    <b-container class="shoplist">
      <div v-if="!pageOfShops.length" >
        <h5>Zurzeit leider keine Läden, die zur deiner Suche passen :(</h5>
      </div>
      <div v-else>
        <b-row>
          <b-col>
            <!-- <p class="text-left">Zeige {{ (parseInt(pager.currentPage)-1)*parseInt(pager.pageSize)+1 }} - {{ parseInt(pager.currentPage)*parseInt(pager.pageSize) }}
              von {{ pager.totalItems }} Ergebnissen<br></p> -->
          </b-col>
          <b-col>
            <div class="orderBySelection text-right">
              Karten-Ansicht | Order by ...
            </div>
          </b-col>
        </b-row>
        <shopItem
          v-for="shop in pageOfShops"
          :key="shop._id"
          :shop="shop"/>
        <pagination :pager="pager"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import RepositoryFactory from '../../repositories/RepositoryFactory'
import shopItem from './ShopItem'
import pagination from './Pagination'
import filterbar from './FilterBar'

const shopsRepository = RepositoryFactory.get('shops')

export default {
  components: {
    shopItem,
    pagination,
    filterbar
  },
  data () {
    return {
      pager: {},
      pageOfShops: [],
      filters: {
        industries: [],
        categories: [],
        text: ''
      }
    }
  },
  watch: {
    '$route.query.page': {
      immediate: true,
      handler (page) {
        page = parseInt(page) || 1
        if (page !== this.pager.currentPage) {
          this.getShops()
        }
      }
    }
  },
  methods: {
    async getShops () {
      const page = parseInt(this.pager.page) || 1
      const response = await shopsRepository.getShopsPage(page, this.filters)
      this.pager = response.data.pager
      this.pageOfShops = response.data.pageOfShops
    },

    newSearch (filters) {
      this.filters = filters
      this.getShops()
    }
  }
}
</script>

<style scoped>
.shoplist{
    margin-top: 40px;
}
</style>
