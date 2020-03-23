<template>
  <b-container>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="title"
        label="Titel:"
        label-for="title"
        description="Gebe hier den Titel deines Projekts ein.">
            <b-form-input
            id="title"
            v-model="form.title"
            type="text"
            required
            placeholder="Titel"
            ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
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