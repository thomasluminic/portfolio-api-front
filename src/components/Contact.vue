<template>
<v-container id="contact">
    <v-row>
        <v-col class="d-flex align-center justify-center">
            <hr>
            <h1>Contact</h1>
        </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-col cols="6">
            <v-alert
                v-if="message"
                :type="messageType"
                :outlined="true"
                :dismissible="true"
                :elevation="5"
            >
                {{ message }}
            </v-alert>
        </v-col>
    </v-row>
    <v-row class="justify-center">
        <v-col cols="6">
            <v-form
                ref="form"
                v-model="valid"
            >
                <v-text-field
                        v-model="firstname"
                        :rules="firstnameRules"
                        :counter="30"
                        label="Prénom"
                        required
                />
                <v-text-field
                        v-model="lastname"
                        :rules="lastnameRules"
                        :counter="30"
                        label="Nom"
                        required
                />
                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        type="email"
                        label="E-mail"
                        required
                />
                <v-textarea
                        name="content"
                        v-model="content"
                        :rules="contentRules"
                        :counter="250"
                        label="Votre message"
                        required
                ></v-textarea>
                <v-btn
                        :disabled="!valid"
                        :loading="loading"
                        color="success"
                        class="mr-4"
                        @click="validate"
                >
                    Envoyer
                </v-btn>
            </v-form>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
    import { postContacts } from "../assets/js/axiosRequest";

    export default {
        name: "Contact",
        data: () => ({
            valid: true,
            loading: false,
            firstname: '',
            firstnameRules: [
                v => !!v || 'Prénom requis',
                v => (v && v.length >= 4) || 'Votre prénom doit faire plus de 4 charactères',
                v => (v && v.length <= 20) || 'Votre prénom ne doit pas faire plus de 20 charactères',
            ],
            lastname: '',
            lastnameRules: [
                v => !!v || 'Nom requis',
                v => (v && v.length >= 4) || 'Votre nom doit faire plus de 4 charactères',
                v => (v && v.length <= 20) || 'Votre nom ne doit pas faire plus de 20 charactères',
            ],
            email: '',
            emailRules: [
                v => !! v || 'Email requis',
                v => /.+@.+\..+/.test(v) || 'Votre e-mail doit être valide',
            ],
            content: '',
            contentRules: [
                v => !! v || 'Message requis',
                v => (v && v.length >= 5) || 'Votre message doit faire plus de 5 charactères',
            ],
            message: '',
            messageType: '',
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.loading = true;
                    let formData = new FormData();
                    formData.set('firstname', this.firstname);
                    formData.set('lastname', this.lastname);
                    formData.set('email', this.email);
                    formData.set('content', this.content);
                    postContacts(formData).then((response) => {
                        this.message = response;
                        this.messageType = 'success';
                        this.cleaningFields();
                        this.loading = false;
                    }).catch((error) => {
                        this.message = error;
                        this.messageType = 'error';
                        this.loading = false;
                    });
                }
            },
            cleaningFields() {
                this.firstname = '';
                this.lastname = '';
                this.email = '';
                this.content = '';
            },
        },
    }
</script>

<style scoped>

</style>
