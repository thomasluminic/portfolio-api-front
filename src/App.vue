<template>
    <v-app>
        <navbar/>
        <presentation :numberProject="numberProjects"/>
        <project :projects="projects"/>
        <formation :formations="formations"/>
        <contact/>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar';
    import Presentation from './components/Presentation';
    import Project from "./components/Project";
    import Formation from "./components/Formation";
    import Contact from "./components/Contact";
    import {getToken, getProjects, getFormations} from "./assets/js/axiosRequest";
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        components: {
            Navbar,
            Presentation,
            Project,
            Formation,
            Contact,
        },
        data: () => ({
            projects: {},
            formations: {},
            numberProjects: 0,
        }),
        beforeCreate() {
            getToken().then((response) => {
                this.setToken(response.token)
            });
        },
        created() {
            getProjects(this.token).then((response) => {
                this.projects = response["hydra:member"];
                this.numberProjects = response["hydra:totalItems"];
            });
            getFormations(this.token).then((response) => {
                this.formations = response["hydra:member"];
            });
        },
        computed: Object.assign({},
            mapGetters([
                'token',
            ])
        ),
        methods: Object.assign({},
            mapActions([
                'setToken',
            ]),
        ),
    };
</script>
<style>
    @import "assets/css/main.css";
</style>
