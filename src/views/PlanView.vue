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
    }
}
</script>