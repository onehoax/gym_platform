<template>
    <header>
        <nav class="nav-wrapper transparent">
            <div class="container">
                <a href="/" class="brand-logo">Movimiento Alpha</a>
                <a href="" class="sidenav-trigger right" data-target="mobile-menu">
                    <i class="material-icons">menu</i>
                </a>
                <!-- Navbar links -->
                <links 
                    classes="right hide-on-med-and-down"
                    :options="options">
                </links>

                <!-- Sidenav when screen size decreases -->
                <links 
                    classes="sidenav grey lighten-2" id="mobile-menu"
                    :options="options">
                </links>

                <!-- Modals -->
                <auth name="Registrate" id="modal-signup"></auth>
                <auth name="Log In" id="modal-login"></auth>
            </div>
        </nav>
    </header>
</template>

<script>
import links from './NavLinks'
import authModal from './AuthModal'

export default {
    components: {
        'links': links,
        'auth': authModal
    },
    props: {
        user: {
            type: String
        },
        options: {
            type: Array[String]
        }
    },
}
</script>

<style scoped>
    header {
        background: url(../assets/weights.jpg);
        background-size: cover;
        background-position: center;
        min-height: 1000px;
    }

    #mobile-menu {
        width: 200px;
    }

    @media screen and (max-width: 670px) {
        header {
            min-height: 500px;
        }
    }
</style>