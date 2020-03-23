<template>
    <div id="filterbar" class="sticky-top">
        <b-container class="full-height">
            <b-row>
                <b-col id="filters">
                    <div class="row">
                        <div v-on:click="toggleFilterMenu('interests')" class="col-md-4 filter-item">
                            <font-awesome-icon class="icon-padded" icon="heart" />
                            Branche
                            <font-awesome-icon class="ml-auto" icon="angle-down" />
                        </div>
                        <div v-on:click="toggleFilterMenu('skills')"  class="col-md-4 filter-item">
                            <font-awesome-icon class="icon-padded" icon="pencil-ruler" />
                            Kategorien
                            <font-awesome-icon class="ml-auto" icon="angle-down" />
                        </div>
                        <div v-on:click="toggleFilterMenu('more')" class="col-md-4 filter-item">
                            <font-awesome-icon class="icon-padded" icon="ellipsis-h" />
                            Mehr Filter
                            <font-awesome-icon class="ml-auto" icon="angle-down" />
                        </div>
                    </div>
                </b-col>
                <searchBar/>
            </b-row>
        </b-container>
        <transition name="dropmenu">
            <div v-if="selectedFilterMenu!=''" class="dropdown-filters">
                <b-container>
                   <interestFilters v-if="selectedFilterMenu==='interests'"/>
                    <skillFilters v-if="selectedFilterMenu==='skills'"/>
                    <moreFilters v-if="selectedFilterMenu==='more'"/> 
                </b-container>
            </div>
        </transition>
    </div>
</template>

<script>
import interestFilters from "./InterestFilters"
import skillFilters from "./SkillsFilter"
import moreFilters from "./MoreFilters"
import searchBar from "./SearchBar"

export default {
    data() {
        return{
            selectedFilterMenu: ""
        }
    },
    components: {
        interestFilters,
        skillFilters,
        moreFilters,
        searchBar
    },
    methods: {
        toggleFilterMenu: function(type){
            if(this.selectedFilterMenu === "" || this.selectedFilterMenu != type){
                this.selectedFilterMenu = type
            }else{
                this.selectedFilterMenu = ""
            }
            

        }
    }
}
</script>

<style>
#filterbar{
    z-index: 19;
    background-color:  #FFF;
}
.filter-item{
    height: 48px;
    border-right: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
    min-width: 180px;
    padding: 15px;
    font-weight: 800;
    display:flex;
    align-items: center;
    cursor: pointer;
}
.icon-padded{
    padding-right: 10px;
    font-size: 28px;
}
.dropdown-filters{
    text-align: left;
}
</style>