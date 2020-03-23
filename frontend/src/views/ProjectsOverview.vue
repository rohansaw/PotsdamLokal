<template>
    <div id="Projects">
        <b-jumbotron class="bg-image mb-0 text-center">
            <h1>Bringe dich in Projekten ein!</h1>
            <h2>Finde Projekte nach deinen Fähigkeiten und Interessen</h2>
            <router-link to="create-project" class="selection-button mt-3"  tag="button">+ Projekt hinzufügen</router-link>
        </b-jumbotron>
        <!-- bar, die oben andockt: Searchbox, Causes (Mit icons?), skills (option: use my profile), loction, mehr(NGO/Privat) -->
        <filterbar/>
        <projectslist/>
    </div>
</template>

<script>
import projectslist from '../components/projects/ProjectsList'
import filterbar from '../components/projects/FilterBar'

export default {
    data: {

    },
    components: {
        projectslist,
        filterbar
    }
}
</script>

<style scoped>
.bg-image{
    border-radius: 0px;
    color: #ecf0f1;
    height: 300px;
    background-color: #ED8182;
}
.selection-button{
    color: #FFF !important;
    border-color: #FFF !important;
}
</style>