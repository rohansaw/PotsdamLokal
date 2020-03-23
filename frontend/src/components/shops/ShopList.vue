<template>
  <div id="ShopList">
    <b-container>
      <div v-if="!pageOfProjects.length" >
        <h5>Zurzeit leider keine Läden, die zur deiner Suche passen :(</h5>
      </div>
      <div v-else>
        <b-row>
          <p class="text-left">Zeige {{ (parseInt(pager.currentPage)-1)*parseInt(pager.pageSize)+1 }} - {{ parseInt(pager.currentPage)*parseInt(pager.pageSize) }}
            von {{ pager.totalItems }} Ergebnissen<br></p>
          <div class="orderBySelection text-right">
            Karten-Ansicht | Order by
          </div>
        </b-row>
        <shopItem
          v-for="project in pageOfProjects"
          :key="project.id"
          :title="project.title"/>
        <pagination :pager="pager"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import RepositoryFactory from '../../repositories/RepositoryFactory'
import shopItem from './ShopItem'
import pagination from './Pagination'

const shopsRepository = RepositoryFactory.get('shops')

export default {
  components: {
    shopItem,
    pagination
  },
  data () {
    return {
      pager: {},
      pageOfProjects: []
    }
  },
  watch: {
    '$route.query.page': {
      immediate: true,
      handler (page) {
        page = parseInt(page) || 1
        if (page !== this.pager.currentPage) {
          shopsRepository.getShopsPage(page)
<<<<<<< HEAD
          .then(response => {
            this.pager = response.data.pager
            this.pageOfProjects = response.data.pageOfProjects
          })
          .catch(error => console.log('An error occured', error))
=======
            .then(response => {
              return response.data
            })
            .catch(error => console.log('An error occured', error))
>>>>>>> a3eef43a523e1875161fdab7d2127d3d13df185b
        }
      }
    }
  }
}
</script>

<style scoped>
#ShopList{
    margin-top: 40px;
}
</style>
