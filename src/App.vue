<template>
    <v-app>
        <navbar/>
        <presentation :numberProject="numberProjects" />
        <project :projects="projects"/>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar';
    import Presentation from './components/Presentation';
    import Project from "./components/Project";
    import { getToken, getProjects } from "./assets/js/axiosRequest";
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        components: {
            Navbar,
            Presentation,
            Project,
        },
        data: () => ({
            projects: {},
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
