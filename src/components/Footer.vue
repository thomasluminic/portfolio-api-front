<template>
<v-footer
        dark
        padless
>
    <v-card
            flat
            tile
            class="primary accent--text text-center"
    >
        <v-card-text>
            <v-btn
                    v-for="icon in icons"
                    :key="icon.name"
                    class="mx-4 accent--text"
                    icon
                    :href="icon.href"
                    target="_blank"
            >
                <v-icon size="24px">{{ icon.name }}</v-icon>
            </v-btn>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text>
            <v-btn
                    v-for="item in items"
                    :key="item.title"
                    color="white"
                    text
                    rounded
                    class="my-2"
                    @click="$vuetify.goTo(item.target, options)"
            >
                {{ item.title }}
            </v-btn>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-text class="accent--text">
            {{ new Date().getFullYear() }} — <strong>Portfolio</strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
    export default {
        name: "AppFooter",
        data: () => ({
            icons: [
                {
                    name: 'mdi-github',
                    href: 'https://github.com/thomasluminic'
                },
                {
                    name: 'mdi-linkedin',
                    href: 'https://www.linkedin.com/in/thomasluminic/',
                },
            ],
            items: [
                {
                    title: 'Présentation',
                    target: '#presentation',
                },
                {
                    title: 'Compétences',
                    target: '#skill',
                },
                {
                    title: 'Projets',
                    target: '#project',
                },
                {
                    title: 'Formation',
                    target: '#formation',
                },
                {
                    title: 'Contact',
                    target: '#contact',
                },
            ],
            options: {
                duration: 1000,
                offset: 0,
                easing: 'easeInCubic',
            },
        }),
    }
</script>

<style scoped>
    footer > div {
        width: 100%;
    }
    hr {
        margin: 0 auto;
    }
</style>
