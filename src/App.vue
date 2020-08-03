<template>
    <v-app>
        <navbar/>
        <presentation/>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar';
    import Presentation from './components/Presentation';
    import { getToken } from "./assets/js/axiosRequest";
    import { mapActions } from 'vuex';

    export default {
        name: 'App',
        components: {
            Navbar,
            Presentation,
        },
        data: () => ({
            //
        }),
        mounted() {
            getToken().then((response) => {
                this.setToken(response.token)
            })
        },
        methods: Object.assign({},
            mapActions([
                'setToken',
            ]),
        ),
    };
</script>
