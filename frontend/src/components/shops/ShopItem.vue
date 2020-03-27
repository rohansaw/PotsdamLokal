<template>
  <b-card
    img-src="https://placekitten.com/300/300"
    img-alt="Project image"
    img-left
    class="mb-3 text-left project-item"
    @click="showDetail(id)">
    <h4>{{ shop.name }}</h4>
    <p class="mb-2">
      {{ shop.description }}
    </p>

    <b-row>
      <b-col cols="9">
        <b-container>
          <b-row class="mb-2">
            <h6>Branche: {{ ...(shop.industries) }}</h6>
          </b-row>
          <b-row>
            <tag :name="'Stifte'"/>
            <tag :name="'Magazine'"/>
            <tag :name="'Fair-Trade'"/>
            <tag :name="'Unverpackt'"/>
          </b-row>
        </b-container>
      </b-col>
      <b-col class="text-right"><font-awesome-icon icon="map-marker-alt" />{{ shop.address.street }}<br> {{ shop.address.plz }} Potsdam</b-col>
    </b-row>
  </b-card>
</template>

<script>
import tag from './Tag'

export default {
  components: {
    tag
  },
  props: {
    shop: {
      type: Object,
      default: () => {}
    }

  },
  methods: {
    showDetail: function (id) {

    }
  }
}
</script>

<style>
.project-item{
    height: auto;
    overflow: hidden;
    border: none;
}
img{
  height:200px;
}
</style>
