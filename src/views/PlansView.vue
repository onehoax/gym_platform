<template>
    <div>
        <nav-bar :options="options"></nav-bar>
        <plans></plans>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
import navBar from '../components/Navbar'
import footer from '../components/Footer'
import plans from '../components/Plans'
import { auth } from '../firebase/auth'

export default {
    components: {
        'nav-bar': navBar,
        'vue-footer': footer,
        'plans': plans
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