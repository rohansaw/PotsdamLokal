<template>

  <div>

    <b-jumbotron class="bg-image mb-0 text-center">
      <b-container>
        <h1>In nur wenigen Schritten zur eigenen PotsdamLokal Seite</h1>
      </b-container>
    </b-jumbotron>

    <b-container class="mt-5">
      <b-form @submit="onSubmit" v-if="show">

        <template>
    <div>
        <b-form-group id="form-name" label="Name des Unternehmens" label-for="form-name">
            <b-form-input
                id="form-name"
                v-model="form.name"
                required
                placeholder="Name..."
            ></b-form-input>
        </b-form-group>

        <b-form-group id="form-branch" label="Branche des Unternehmens" label-for="form-branch">
            <b-form-select
                id="form-branch"
                class="mb-2 mr-sm-2 mb-sm-0"
                :options="branches"
                :value="null"
            ></b-form-select>
        </b-form-group>

        <b-form-group id="form-desc" label="Beschreibung" label-for="form-desc">
            <b-form-textarea
                id="form-desc"
                v-model="form.description"
                placeholder="Beschreibung sie hier kurz ihr Unternehmen..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>
        </b-form-group>

         <b-form-checkbox class="mb-4">Wir liefern auch</b-form-checkbox>
         
    </div>
</template>

        <b-button type="submit" variant="primary">Seite erstellen</b-button>

      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios"
import router from "../../router"

  export default {
    data() {
      return {
        form: {
          name: "",
          branch: "",
          categories: [],
          description: "",
          adress: "",
          delivers: false,
        },
        show: true,
        branches: []
      }
    },
    mounted(){
      axios.get("/api/branches")
      .then(res => this.branches = res.data)
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post("/api/createProject", this.form)    
            .then((response) => {    
                console.log("Project Added")    
                router.push("/projects")    
            })    
            .catch((errors) => {    
                console.log("Could not add Project")    
            })    
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