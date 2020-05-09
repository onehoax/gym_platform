<template>
    <!-- scrollspy class allows the page to scroll smoothly to corresponding section -->
    <section class="container section scrollspy" id="Servicios">
        <div class="row">
            <description></description>
            <tabs></tabs>
        </div>
    </section>
</template>

<script>
import description from './Description'
import tabs from './Tabs'

export default {
    components: {
        'description': description,
        'tabs': tabs
    }
 }
</script>