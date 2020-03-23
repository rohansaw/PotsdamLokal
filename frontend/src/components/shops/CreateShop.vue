<template>

  <div>

    <b-jumbotron class="bg-image mb-0 text-center">
      <b-container>
        <h1>In nur wenigen Schritten zur eigenen PotsdamLokal Seite</h1>
      </b-container>
    </b-jumbotron>

    <b-container class="mt-5">
      <b-form
        v-if="show"
        @submit="onSubmit">

        <template>
          <div>
            <b-form-group
              id="form-name"
              label="Name des Unternehmens"
              label-for="form-name">
              <b-form-input
                id="form-name"
                v-model="form.name"
                required
                placeholder="Name..."
              />
            </b-form-group>

            <b-form-group
              id="form-branch"
              label="Branche des Unternehmens"
              label-for="form-branch">
              <b-form-select
                id="form-branch"
                :options="branches"
                :value="null"
                class="mb-2 mr-sm-2 mb-sm-0"
              /></b-form-group>

            <b-form-group
              id="form-desc"
              label="Beschreibung"
              label-for="form-desc">
              <b-form-textarea
                id="form-desc"
                v-model="form.description"
                placeholder="Beschreibung sie hier kurz ihr Unternehmen..."
                rows="3"
                max-rows="6"
              />
            </b-form-group>

            <b-form-checkbox class="mb-4">Wir liefern auch</b-form-checkbox>

          </div>
        </template>

        <b-button
          type="submit"
          variant="primary">Seite erstellen</b-button>

      </b-form>
    </b-container>
  </div>
</template>

<script>
import RepositoryFactory from '../../repositories/RepositoryFactory'
const shopsRepository = RepositoryFactory.get('shops')

export default {
  data () {
    return {
      form: {
        name: '',
        branch: '',
        categories: [],
        description: '',
        adress: '',
        delivers: false
      },
      show: true,
      branches: []
    }
  },
  mounted () {
    this.branches = shopsRepository.getBranches()
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      shopsRepository.postNewShop(this.form)
    },
  }
}
</script>

<style scoped>
.bg-image{
  border-radius: 0px;
  color: #ecf0f1;
  height: 200px;
  background-color: #ED8182;
}
</style>
