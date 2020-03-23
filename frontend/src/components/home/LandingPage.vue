<template>
    <div id ="LandingPage">    
        <b-jumbotron class="bg-image mb-0">
            <b-container>
                <h1 class="display-3">PotsdamLokal - Einkaufen</h1>
                <p class="lead">Unterstütze jetzt den lokalen Einzelhandel in Potsdam</p>
                <h3>In Zeiten von Covid19 leidet der lokale Einzelhandel stark. Über PotsdamLokal könnt ihr jetzt online mit den Läden in Potsdam in kontakt treten und Zeitslots zum abholen der Produkte ausmachen oder auch Produkte liefern lassen</h3>
            </b-container>
        </b-jumbotron>
        <b-container fluid>
            <b-row id="Selection-row">
                <b-col class="select-projects text-center">
                    <router-link to="projects" class="selection-button"  tag="button">Projekte finden</router-link>
                    <br><br>Du möchtest einkaufen? Durchsuche jetzt Läden in Potsdam
                </b-col>
                <b-col class="select-activists text-center">
                    <router-link to="" class="selection-button" tag="button">Profile durchsuchen</router-link>
                    <br><br>Du hast ein Geschäft in Potsdam und möchtest deine Produkte online anbieten? Erstelle jetzt eine Seite für deinen Laden
                </b-col>
            </b-row>
            <div id="Info-container">

            </div> 
        </b-container>
    </div>
</template>

<style scoped>
.bg-image{
    border-radius: 0px;
    color: #ecf0f1;
    height: 500px;
    background-color: #ED8182 !important;
}
#Selection-row{
    min-height: 300px;
    font-size: 20px;
    color: #212529;
}
.select-projects{
    padding: 50px;
    background-color: #A0D0F8;
}
.select-activists {
    padding: 50px;
    background-color: #a9d4f8;
}
#Info-container{
    min-height: 400px;
}
</style>