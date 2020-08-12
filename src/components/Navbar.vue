<template>
    <v-navigation-drawer
            :expand-on-hover="true"
            :fixed="true"
            dark
    >
        <v-list-item two-line>
            <v-list-item-avatar>
                <img src="../assets/images/profileAvatar.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Thomas Luminic</v-list-item-title>
                <v-list-item-subtitle>Portefolio</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
                dense
                nav
                class="nav-list"
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                class="nav-list-item"
                @click="$vuetify.goTo(item.target, options)"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'Navbar',
        data: () => ({
            items: [
                {
                    title: 'Présentation',
                    icon: 'mdi-face',
                    target: '#presentation',
                },
                {
                    title: 'Mes projets',
                    icon: 'mdi-book',
                    target: '#project',
                },
                {
                    title: 'Formation',
                    icon: 'mdi-school',
                    target: '#formation',
                },
                {
                    title: 'Contact',
                    icon: 'mdi-send',
                    target: '#contact',
                },
                {
                    title: 'Mes résaux sociaux',
                    icon: 'mdi-share',
                    target: '#socialNetwork',
                },
            ],
            right: null,
            options: {
                duration: 1000,
                offset: 0,
                easing: 'easeInCubic',
            }
        }),
    }
</script>
<style scoped>
    .nav-list {
        margin-top: 20px;
    }
    .v-list.nav-list.v-sheet.theme--dark.v-list--dense.v-list--nav > div.nav-list-item {
        margin-bottom: 50px;
    }
    .v-list-item {
        padding: 0 9px;
    }
</style>
