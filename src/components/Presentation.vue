<template>
    <v-container class="margin-section">
        <v-row>
            <v-col
                    class="d-flex align-center flex-column title-margin"
            >
                <h2 v-scrollanimation>Thomas Luminic</h2>
                <h2 class="transform-subtitle" v-scrollanimation>Developpeur web</h2>
            </v-col>
        </v-row>
        <v-row class="align-center justify-center margin-section" id="presentation">
            <h1>Presentation</h1>
            <hr>
        </v-row>
        <v-row class="mt-10 margin-section">
            <v-col xs="12" class="d-flex flex-column align-center">
                <div class="text-left w-50">
                    <p class="" v-scrollanimation>
                        <v-icon class="primary--text">mdi-cake-variant</v-icon>
                        {{ age }} ans
                    </p>
                    <p v-scrollanimation>
                        <v-icon class="primary--text">mdi-iframe</v-icon>
                        1 an d'expérience
                    </p>
                    <p v-scrollanimation>
                        <v-icon class="primary--text">mdi-file-document-multiple-outline</v-icon>
                        {{ numberProject }} projets
                    </p>
                </div>
            </v-col>
            <v-col xs="12" class="d-flex flex-column align-center">
                <div class="text-left w-50">
                    <p v-scrollanimation>
                        <v-icon class="primary--text">mdi-head-heart-outline</v-icon>
                        Passioné
                    </p>
                    <p v-scrollanimation>
                        <v-icon class="primary--text">mdi-crown</v-icon>
                        Challenger
                    </p>
                    <p v-scrollanimation>
                        <v-icon class="primary--text">mdi-coffee</v-icon>
                        Il me faut un café
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        name: "Presentation",
        mounted() {
            this.age = this.calculateAge();
        },
        computed: mapGetters('project', [
            'numberProject',
        ]),
        data: () => ({
            age: '',
        }),
        methods: {
            calculateAge() {
                let birth = new Date('1995-11-12');
                let diff = Date.now() - birth.getTime();
                let age = new Date(diff);

                return Math.abs(age.getUTCFullYear() - 1970);
            },
        },
    }
</script>

<style scoped>
    .v-icon.v-icon {
        font-size: 35px;
    }
    .before-enter {
        opacity: 0;
        transform: translateX(100px);
        transition: all 1.6s cubic-bezier(.25,.7,.36,1.68);
    }
    .enter {
        opacity: 1;
        transform: translateX(0px);
    }
    .transform-subtitle {
        transition-delay: 0.6s;
    }
    .title-margin {
        margin: 300px auto 300px auto;
    }
    hr {
        width: 55%;
        margin: auto 50px;
    }
    @media screen and (max-width: 600px) {
        .title-margin {
            margin: 30px auto 30px auto;
        }
    }
    .w-50 {
        width: 50%;
    }
</style>
