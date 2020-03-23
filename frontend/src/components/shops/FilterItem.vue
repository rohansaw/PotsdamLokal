<template>
  <li>
    <label
      for="id"
      class="">
      <input
        id="id"
        type="checkbox"
        value="id"
        @input="$emit('input', $event.target.value)"/>
      {{ name }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
  }
}
</script>

<style scoped>
label{
    font-size: 1.2em;
}
</style>
