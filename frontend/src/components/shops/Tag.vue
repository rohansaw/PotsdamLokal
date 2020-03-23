<template>
  <div class="tag">
    <font-awesome-icon icon="tag" />
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'test'
    }
  }
}
</script>

<style scoped>
.tag{
    color: #ED8182 !important;
    padding: 3px;
    border-radius: 10px;
    border: 1px solid #ED8182;
    margin-left: 15px;
}
</style>
