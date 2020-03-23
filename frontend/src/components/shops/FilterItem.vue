<template>
    <li>
        <label for="id" class="">
            <input type="checkbox" id="id" value="id">
            {{name}}
        </label>
    </li>
</template>

<script>
export default {
    props:{
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
