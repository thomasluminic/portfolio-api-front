<template>
<v-container id="formation">
    <v-row class="margin-section">
        <v-col class="d-flex align-center justify-center">
            <h1>Formation</h1>
            <hr>
        </v-col>
    </v-row>
    <v-row class="justify-center margin-section">
        <v-col cols="10">
            <v-timeline>
                <v-timeline-item
                        v-for="formation in formations"
                        :key="formation.id"
                        small
                >
                    <template v-slot:opposite>
    <span
            class="headline font-weight-bold"
    >{{ formation.dateStart | formatDate | capitalize }} - {{ formation.dateEnd | formatDate | capitalize }}</span>
                    </template>
                    <v-col>
                        <h2 class="headline font-weight-light mb-4">{{ formation.name }}</h2>
                        <div>
                            <p>{{ formation.location }} - {{formation.qualification}}</p>
                            <p>{{ formation.qualification }}</p>
                        </div>
                    </v-col>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "Formation",
        props: {
            formations: {
                Array,
                default: {},
            },
        },
        filters: {
            capitalize: function(value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
            formatDate: function (value) {
                if (!value) return ''
                return moment(value).format('MMM YYYY');
            },
        },
    }
</script>

<style scoped>
p {
    font-size: 1.3em;
}
</style>
