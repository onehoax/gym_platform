<template>
    <div>
        <nav-bar :options="options"></nav-bar>
        <description :name="this.$route.params.planName"></description>
        <day day="Lunes" id="1"></day>
        <day day="Martes" id="2"></day>
        <day day="Miercoles" id="3"></day>
        <day day="Jueves" id="4"></day>
        <day day="Viernes" id="5"></day>
        <day day="Sabado" id="6"></day>
        <day day="Domingo" id="7"></day>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
import navBar from '../components/Navbar'
import footer from '../components/Footer'
import description from '../components/PlanDescription'
import day from '../components/Day'
import { auth } from '../firebase/auth'

export default {
    components: {
        'nav-bar': navBar,
        'vue-footer': footer,
        'description': description,
        'day': day
    },
    data() {
        return {
            options: ['Log Out']
        }
    },
    mounted() {
        // listen for auth status changes; if user is signed in
        // then they have access to this page, otherwise redirect to home
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log('user logged in: ', user)
            } else {
                console.log('user logged out')
                this.$router.push('/')
                .catch(err => {
                    console.log(err)
                })
            }
        })
    }
}
</script>