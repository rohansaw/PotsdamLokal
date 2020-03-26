<template>
  <li>
    <label
      :for="id"
      class="">
      <input
        :id="id"
        type="checkbox"
        :value="name"
        @input="$emit('input', $event.target.value)">
      {{ name }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'test'
    }
  }
}
</script>

<style scoped>
label{
  font-size: 1.2em;
}
</style>
