<template>
    <v-container class="margin-section">
        <v-row>
            <v-col
                    class="d-flex align-center flex-column title-margin"
            >
                <h2 class="title-animation">Thomas Luminic</h2>
                <h2 class="subtitle-animation">Developpeur web</h2>
            </v-col>
        </v-row>
        <v-row class="align-center justify-center">
            <h1>Presentation</h1>
            <hr>
        </v-row>
        <v-row class="mt-10">
            <v-col cols="6" class="d-flex flex-column align-center">
                <p class="text-animation-right">
                    <v-icon class="primary--text">mdi-cake-variant</v-icon>
                    {{ age }} ans
                </p>
                <p class="text-animation-right">
                    <v-icon class="primary--text">mdi-iframe</v-icon>
                    1 an d'expérience
                </p>
                <p class="text-animation-right">
                    <v-icon class="primary--text">mdi-file-document-multiple-outline</v-icon>
                    {{ numberProject }} projets
                </p>
            </v-col>
            <v-col cols="6" class="text-center">
                <p class="text-animation">
                    <v-icon class="primary--text">mdi-head-heart-outline</v-icon>
                    Passioné
                </p>
                <p class="text-animation">
                    <v-icon class="primary--text">mdi-crown</v-icon>
                    Challenger
                </p>
                <p class="text-animation">
                    <v-icon class="primary--text">mdi-coffee</v-icon>
                    Il me faut un café
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Presentation",
        props: {
            numberProject: {
                Number,
                default: 0,
            },
        },
        data: () => ({
            age: '',
        }),
        mounted() {
            this.age = this.calculateAge();
        },
        methods: {
            calculateAge() {
                let birth = new Date('1995-11-12');
                let diff = Date.now() - birth.getTime();
                let age = new Date(diff);

                return Math.abs(age.getUTCFullYear() - 1970);
            }
        }
    }
</script>

<style scoped>
    .v-icon.v-icon {
        font-size: 35px;
    }

    .title-margin {
        margin: 300px auto 300px auto;
    }

    .title-animation {
        animation-name: text-slide;
        animation-duration: 0.6s;
    }

    .subtitle-animation {
        animation: 0.6s 0.3s text-slide both;
        opacity: 0;
    }
    hr {
        width: 55%;
        margin: auto 50px;
    }
    .text-animation {
        animation: 0.6s 0.3s text-slide both;
        opacity: 0;
    }
    .text-animation-right {
        animation: 0.6s 0.3s text-slide-right both;
        opacity: 0;
    }

    @keyframes text-slide {
        from {
            margin-left: 900px;
            opacity: 0
        }
        to {
            margin-left: 0;
            opacity: 1
        }
    }
    @keyframes text-slide-right {
        from {
            margin-right: 900px;
            opacity: 0
        }
        to {
            margin-right: 0;
            opacity: 1
        }
    }
</style>
