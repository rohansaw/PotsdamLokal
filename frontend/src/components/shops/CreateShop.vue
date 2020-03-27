<template>

  <div>

    <b-jumbotron class="bg-image mb-0 text-center">
      <b-container>
        <h1 class="mb-3">Beschreiben sie ihr Unternehmen</h1>
      </b-container>
    </b-jumbotron>

    <b-container class="mt-5 mb-5">
      <b-form
        v-if="show">
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
              v-model="form.industries"
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
              :maxlength="2000"
              rows="3"
              max-rows="6"
            />
          </b-form-group>

          <b-form-group
            id="form-address"
            label="Adresse"
            label-for="form-desc"
          >
            <b-col>
              <b-form-input
                id="form-plz"
                v-model="form.address.plz"
                type="number"
                required
                placeholder="PLZ..."
              />
            </b-col>
            <b-col>
              <b-form-input
                id="form-straße"
                v-model="form.address.street"
                :maxlength="80"
                required
                placeholder="Straße und Hausnummer..."
              />
            </b-col>
          </b-form-group>

          <div class="addTags">
            <p>Schlagworte hinzufügen. (Füllen sie vorher alle anderen Felder aus)</p>
            <b-form-input
              id="form-straße"
              @input="makeTag($event)"
              @keyup.enter="pushTag($event)"
              @keyup.space="pushTag($event)"
              v-model="tagText"
              required
              :maxlength="20"
              placeholder="Schlagworte hinzufügen..."
            />
            <b-row class="mt-3 mb-3 ">
              <tag
                v-for="tag in form.tags"
                :key="form.tags.indexOf(tag)"
                :name="tag" />
            </b-row>
          </div>

          <b-form-checkbox class="mb-4">Wir liefern auch</b-form-checkbox>

        </div>

        <b-button
          type="submit"
          @click="$emit('submit', form)"
          variant="primary">Seite erstellen</b-button>

      </b-form>
    </b-container>
  </div>
</template>

<script>
import RepositoryFactory from '../../repositories/RepositoryFactory'
import tag from './Tag'
const shopsRepository = RepositoryFactory.get('shops')

export default {
  data () {
    return {
      form: {
        name: '',
        industries: [],
        description: '',
        address: {
          plz: null,
          street: ''
        },
        delivers: false,
        tags: []
      },
      show: true,
      branches: [],
      writingTag: false,
      tagText: ''
    }
  },
  components: {
    tag
  },
  mounted () {
    shopsRepository.getShopIndustries()
      .then(res => {
        this.branches = res.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    makeTag (evt) {
      if (this.writingTag === false) {
        this.writingTag = true
        this.form.tags.push(evt)
      } else {
        this.form.tags.pop()
        this.form.tags.push(evt)
      }
    },

    pushTag (evt) {
      this.writingTag = false
      this.tagText = ''
    }
  }
}
</script>

<style scoped>
.bg-image{
  border-radius: 0px;
  color: #ecf0f1;
  height: auto;
  background-color: #ED8182;
}
</style>
