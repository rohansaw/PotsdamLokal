<template>
    <div id ="LandingPage">    
        <b-jumbotron class="bg-image mb-0">
            <b-container>
                <h1 class="display-3">KollektivAktiv</h1>
                <p class="lead">Anonym | Unabhängig | Sozial</p>
                <h3>Finde Projekte oder suche Mitstreiter:innen und verändert gemeinsam die Welt!</h3>
            </b-container>
        </b-jumbotron>
        <b-container fluid>
            <b-row id="Selection-row">
                <b-col class="select-projects text-center">
                    <router-link to="projects" class="selection-button"  tag="button">Projekte finden</router-link>
                    <br><br>Du möchtest duch ehrenamtlich engagieren, weißt aber nicht, wo genau du deine Fähigkeiten einbringen kannst?
                        Finde jetzt Projekte nach deinen Interessen!
                </b-col>
                <b-col class="select-activists text-center">
                    <router-link to="" class="selection-button" tag="button">Profile durchsuchen</router-link>
                    <br><br>Du hast eine Idee für ein Projekt um die Welt nachhaltiger oder sozialer zu gestalten?
                        Dann finde jetzt Mitstreiter:innen für deine Projektideen. Durchsuche öffentlichen Profile, nach Fähigkeiten und Interessen!
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