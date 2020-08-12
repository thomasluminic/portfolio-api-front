<template>
<v-container id="project" class="margin-section">
    <v-row>
        <v-col class="d-flex align-center justify-center">
            <hr>
            <h1>Mes Projets</h1>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" v-for="project in projects" :key="project.id">
            <card :project="project"/>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import Card from './_Card';

    export default {
        name: "Project",
        components: {
            Card,
        },
        props: {
            projects: {
                Array,
                default: {},
            }
        }
    }
</script>

<style scoped>

</style>
