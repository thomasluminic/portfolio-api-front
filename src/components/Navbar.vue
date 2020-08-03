<template>
    <v-navigation-drawer
            :expand-on-hover="true"
            :mini-variant="true"
            :right="right"
            absolute
            dark
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
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
                { title: 'Présentation', icon: 'mdi-face' },
                { title: 'Mes projets', icon: 'mdi-book' },
                { title: 'Formation', icon: 'mdi-school' },
                { title: 'Contact', icon: 'mdi-send' },
                { title: 'Mes résaux sociaux', icon: 'mdi-share' },
            ],
            right: null,
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
</style>
