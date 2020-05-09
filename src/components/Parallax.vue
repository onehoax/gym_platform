<template>
    <div class="parallax-container">
        <div class="parallax">
            <img v-bind:src="require('../assets/' + image)" v-bind:alt="description">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        description: String
    }
}
</script>