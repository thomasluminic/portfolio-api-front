<template>
<v-container>
    <v-row>
        <v-col
            class="text-center"
        >
            <h1>Thomas Luminic</h1>
            <h2>Développeur Web Junior</h2>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div>
                Bonjour, je m'appelle
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import { axiosUser } from "../assets/js/axiosRequest";
    import { mapGetters } from 'vuex';

    export default {
        name: "Presentation",
        data: () => ({
            user: {},
        }),
        computed: Object.assign({},
            mapGetters([
                'token'
            ])
        ),
        mounted() {
            axiosUser(this.token).then(response =>
                console.log(response)
            )
        },
    }
</script>

<style scoped>

</style>
