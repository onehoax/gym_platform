<template>
    <div>
        <nav-bar
            servicesLink="#services"
            plansLink="#plans"
            contactLink="#contact"
            :options="options">
        </nav-bar> 
        <services></services>
        <parallax image="train3.webp" description="train"></parallax>
        <plans></plans>
        <parallax image="train4.jpg" description="train"></parallax>
        <contact></contact>
        <vue-footer></vue-footer>
    </div>
</template>

<script>
    import navBar from '../components/Navbar'
    import services from '../components/Services'
    import plans from '../components/Plans'
    // import photos from '../components/Photos'
    import parallax from '../components/Parallax'
    import contact from '../components/Contact'
    import footer from '../components/Footer'

    export default {
        components: {
            'nav-bar': navBar,
            'services': services,
            'plans': plans,
            // 'photos': photos,
            'parallax': parallax,
            'contact': contact,
            'vue-footer': footer
        },
        data() {
            return {
                options: ['Registrate', 'Log In', 'Servicios', 'Planes', 'Contactanos']
            }
        }
    }
</script>

<style>
    .section {
        /* vw refers to view-port width, therefore it
        scales with diff screen sizes */
        padding-top: 4vw;
        padding-bottom: 4vw;
    }
</style>