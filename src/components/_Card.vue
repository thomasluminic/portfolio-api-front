<template>
<v-hover v-slot:default="{ hover }">
    <v-card :href="project.link" target="_blank">
        <v-img
                :src="srcImage(project.images)"
                class="white--text align-end"
        >
        <v-expand-transition>
            <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 accent--text"
                    style="height: 100%;"
            >
                {{project.title}}
            </div>
        </v-expand-transition>
        </v-img>
    </v-card>
</v-hover>
</template>

<script>
    export default {
        name: "Card",
        data: () => ({
        }),
        props: {
            project: {
                Array,
                default: {},
            }
        },
        methods: {
            srcImage(imageName) {
                return require(`../assets/images/${imageName}`);
            }
        }
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>
