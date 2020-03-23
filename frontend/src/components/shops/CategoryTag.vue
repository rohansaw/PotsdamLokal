<template>
  <div class="skillTag">
    <font-awesome-icon icon="pencil-ruler" />
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>
.skillTag{
  color: #7091ad !important;
  padding: 3px;
  border-radius: 10px;
  border: 1px solid #7091ad;
  margin-left: 15px;
}
</style>
