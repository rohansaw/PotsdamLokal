<template>
    <div id="ProjectsList">
        <b-container>  
            <div v-if="!pageOfProjects.length" >
                <h5>Zurzeit leider keine Projekte, die zur deiner Suche passen :(</h5>
            </div>
            <div v-else>
                <p class="text-left">Zeige {{(parseInt(pager.currentPage)-1)*parseInt(pager.pageSize)+1}} - {{parseInt(pager.currentPage)*parseInt(pager.pageSize)}} 
                    von {{pager.totalItems}} Ergebnissen<br></p>
                <projectItem  v-for="project in pageOfProjects" :key="project.id" :title="project.title"/>
                <pagination :pager="pager"/>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from "axios";
import projectItem from "./ProjectItem"
import pagination from "./Pagination"

export default {
    data() {
        return {
            pager: {},
            pageOfProjects: []
        }
    },
    components: {
        projectItem,
        pagination
    },
    watch: {
        '$route.query.page': {
            immediate: true,
            handler(page) {
                page = parseInt(page) || 1;
                if (page !== this.pager.currentPage) {
                    axios.get("/api/projects", {
                        params: {
                            page: page
                        }
                    })
                        .then(response => {
                            this.pager = response.data.pager;
                            this.pageOfProjects = response.data.pageOfProjects;})
                }
            }
        }
    }
}
</script>

<style>
#ProjectsList{
    margin-top: 40px;
}
</style>