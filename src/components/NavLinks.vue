<template>
    <ul :class="classes" :ref="reference">
        <li v-for="option in options" :key="option">
            <!-- If the link we want is either "Register", "Login" or
            "Logout" then we want to link to their corresponding modals -->
            <a 
                v-if="option == 'Registrate'" 
                href="#" 
                class="modal-trigger" 
                data-target="modal-signup">
                {{ option }} 
            </a>
            <a 
                v-else-if="option == 'Log In'"
                href="#" 
                class="modal-trigger" 
                data-target="modal-login">
                {{ option }} 
            </a>
            <a
                v-else-if="option == 'Log Out'"
                href="#"
                ref="logout"
                @click.prevent="logout()">
                {{ option }} 
            </a>
            <a v-else :href="'#' + option">{{ option }}</a>
        </li>
        <!-- <li><a href="#">Registrate</a></li>
        <li><a href="#">Inicia Sesi&oacute;n</a></li>
        <li><a :href="servicesLink">Servicios</a></li>
        <li><a :href="plansLink">Planes</a></li>
        <li><a :href="contactLink">Contactanos</a></li> -->
    </ul>
</template>

<script>
import M from 'materialize-css'
import { auth } from '../firebase/auth'

export default {
    props: {
        classes: {
            type: String
        },
        options: {
            type: Array[String]
        },
        // to assign to this.ref if the links are meant to be a side nav
        // this is so we can use this$refs to initialize the sidenav
        reference: {
            type: String
        }
    },
    methods: {
        logout: function() {
            auth.signOut()
            .then(() => {
                console.log('user signed out');
                this.$router.push('/');
            })
        }
    },
    mounted() {
        // initialize the sidenav functionality with materialize
        M.Sidenav.init(this.$refs.sidenav, { edge: 'right' });
    }
}
</script>