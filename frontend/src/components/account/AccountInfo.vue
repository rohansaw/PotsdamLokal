<template>
  <b-form
    v-if="show"
    @submit="onSubmit">
    <!-- onLoad initalize Fields with Info from server -->
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
            :options="[{ text: 'Auswählen...', value: null }, 'Bücher & Papetrie', 'Design & Geschenkartikel', 'Baby & Kind', 'Mode & Accesoirs', 'Möbel & Interiuer', 'Lebensmittel', 'Hobby & Freizeit', 'Schmuck', 'Parfümerie & Kosmetik', 'Apotheke']"
            :value="null"
            class="mb-2 mr-sm-2 mb-sm-0"
          />
        </b-form-group>

        <b-form-group
          id="form-desc"
          label="Beschreibung"
          label-for="form-desc">
          <b-form-textarea
            id="form-desc"
            v-model="text"
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
      variant="primary">Informationen updaten</b-button>
    <b-button
      type="delete"
      variant="danger">Konto Löschen</b-button>

  </b-form>
</template>

<script>
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
      show: true
    }
  }
}
</script>

<style scoped>

</style>
