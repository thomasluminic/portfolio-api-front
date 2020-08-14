<template>
    <v-app>
        <navbar/>
        <presentation :numberProject="numberProjects"/>
        <skill :skills="skills" />
        <project :projects="projects"/>
        <formation :formations="formations"/>
        <contact/>
        <Footer />
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar';
    import Presentation from './components/Presentation';
    import Project from "./components/Project";
    import Formation from "./components/Formation";
    import Contact from "./components/Contact";
    import Footer from "./components/Footer";
    import Skill from "./components/Skill";
    import {getSkills, getProjects, getFormations} from "./assets/js/axiosRequest";
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'App',
        components: {
            Navbar,
            Presentation,
            Project,
            Formation,
            Contact,
            Footer,
            Skill,
        },
        data: () => ({
            projects: {},
            formations: {},
            skills: {},
            numberProjects: 0,
        }),
        created() {
            getProjects().then((response) => {
                this.projects = response["hydra:member"];
                this.numberProjects = response["hydra:totalItems"];
            });
            getFormations().then((response) => {
                this.formations = response["hydra:member"];
            });
            getSkills().then((response) => {
                this.skills = response["hydra:member"];
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
