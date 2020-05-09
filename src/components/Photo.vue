<template>
    <div class="row">
        <div class="col s12 l4">
            <img v-bind:src="require('../assets/' + image)" v-bind:alt="description" v-bind:class="classes">
        </div>
        <div class="col s12 l6 offset-l1">
            <h2 class="indigo-text text-darken-4">{{ title }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        description: String,
        classes: String,
        title: String,
        text: String
    }
}
</script>