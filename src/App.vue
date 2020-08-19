<template>
    <v-app>
        <navbar/>
        <presentation/>
        <skill/>
        <project/>
        <formation/>
        <contact/>
        <app-footer/>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar';
    import Presentation from './components/Presentation';
    import Project from "./components/Project";
    import Formation from "./components/Formation";
    import Contact from "./components/Contact";
    import AppFooter from "./components/Footer";
    import Skill from "./components/Skill";

    export default {
        name: 'App',
        components: {
            Navbar,
            Presentation,
            Project,
            Formation,
            Contact,
            AppFooter,
            Skill,
        },
    };
</script>
<style>
    @import "assets/css/main.css";
</style>
