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
    }
}
</script>