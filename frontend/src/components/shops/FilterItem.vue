<template>
  <li>
    <label
      for="id"
      class="">
      <input
        id="id"
        type="checkbox"
        value="id">
      {{ name }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String
  }
}
</script>

<style scoped>
label{
    font-weight: 600;
}
</style>
