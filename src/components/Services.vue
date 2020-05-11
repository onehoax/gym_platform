<template>
    <!-- scrollspy class allows the page to scroll smoothly to corresponding section -->
    <section class="container section scrollspy" id="Servicios" ref="scroll">
        <div class="row">
            <description></description>
            <tabs></tabs>
        </div>
    </section>
</template>

<script>
import M from 'materialize-css'
import description from './Description'
import tabs from './Tabs'

export default {
    components: {
        'description': description,
        'tabs': tabs
    },
    mounted() {
        // initialize scroll functionality with materialize
        M.ScrollSpy.init(this.$refs.scroll);
    }
 }
</script>