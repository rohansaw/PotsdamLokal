<template>
  <b-card
    img-src="https://placekitten.com/300/300"
    img-alt="Project image"
    img-left
    class="mb-3 text-left project-item"
    @click="showDetail(id)">
    <h4>{{ title }}</h4>
    <p class="mb-2"> Lorem ipsum dolor sit amet,  aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...</p>

    <b-row>
      <b-col cols="9">
        <b-container>
          <b-row class="mb-2">
            <h5>Tags</h5>
            <tag :name="'Klima'"/>
            <tag :name="'Ernte'"/>
            <tag :name="'Landwirtschaft'"/>
            <tag :name="'Tiere'"/>
          </b-row>
          <b-row>
            <h5>Needed Skills</h5>
            <skillTag :name="'Design'"/>
            <skillTag :name="'Handwerk'"/>
            <skillTag :name="'Automatisierung'"/>
          </b-row>
        </b-container>

      </b-col>
      <b-col class="text-right"><a href="#">Max Mustermann</a><br><font-awesome-icon icon="map-marker-alt" /> 14482 Potsdam</b-col>
    </b-row>
  </b-card>
</template>

<script>
import tag from './Tag'
import skillTag from './CategoryTag'

export default {
  components: {
    tag,
    skillTag
  },
  props: {
    title: {
      type: String,
      default: 'test'
    }
  },
  methods: {
    showDetail: function (id) {

    }
  }
}
</script>

<style scoped>
.project-item{
    height: 200px;
    overflow: hidden;
}
/* img{ */
/*     height:200px; */
/* } */
</style>
