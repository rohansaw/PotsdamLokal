<template>
    <div id="InterestFilters">
        Select All | Unselect All
        <ul class="filtersList">
            <filterItem v-for="i in 24" :key="i" :id="i" :name="'Klimabewegung'"/>
        </ul>
    </div>
</template>

<!-- Später dynamisch nach Einträgen aus der Datenbank anzeigen -->
<script>
import filterItem from "./FilterItem"
export default {
    components:{
        filterItem
    }
    
}
</script>

<style scoped>
.filtersList{
    columns: 3;
    width: 100%;
    list-style-type: none;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    padding: 0px;
}
#InterestFilters{
    padding: 20px 0px;
}
</style>