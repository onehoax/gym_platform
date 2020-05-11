<template>
    <div class="parallax-container">
        <div class="parallax" ref="parallax">
            <img v-bind:src="require('../assets/' + image)" v-bind:alt="description">
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'

export default {
    props: {
        image: String,
        description: String
    },
    mounted() {
        // initiate parallx func. from materialize
        M.Parallax.init(this.$refs.parallax);
    }
}
</script>