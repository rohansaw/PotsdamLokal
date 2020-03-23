<template>
  <b-container>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="name"
        label="Name"
        label-for="name"
        description="Gebe hier den Name deines Geschäfts ein.">
            <b-form-input
            id="name"
            v-model="form.title"
            type="text"
            required
            placeholder="Name"
            ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Seite erstellen</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios"
import router from "../../router"    
  export default {
    data() {
      return {
        form: {
          title: ""
        },
        show: true
      }
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