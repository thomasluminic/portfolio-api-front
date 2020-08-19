<template>
<v-container class="container-margin" id="skill">
    <v-row>
        <v-col class="d-flex align-center justify-center container-margin">
            <h1>Competences</h1>
            <hr>
        </v-col>
    </v-row>
    <v-row class="margin-section">
        <v-col
            v-for="skill in skills"
            :key="skill.name"
            cols="4"
            class="mb-5"
        >
            <v-img
                :src="srcImage(skill.logo)"
                aspect-ratio="1"
                width="80"
                class="ma-auto"
                :alt="skill.name"
                :title="skill.name"
                v-scrollanimation
            ></v-img>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import { getSkills } from "../assets/js/axiosRequest";

    export default {
        name: "Skill",
        created() {
            getSkills().then((response) => {
                this.skills = response["hydra:member"];
            });
        },
        data: () => ({
            skills: {},
        }),
        methods: {
            srcImage(imageName) {
                return require(`../assets/images/${imageName}`);
            }
        }
    }
</script>

<style scoped>
    .before-enter {
        opacity: 0;
        transform: rotate(0.5turn);
        transition: all 1.6s cubic-bezier(.25,.7,.36,1.68);
    }
    .enter {
        opacity: 1;
        transform: rotate(0turn);
    }
</style>
