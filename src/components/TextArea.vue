<template>
    <div class="input-field">
        <i class="material-icons prefix">{{ icon }}</i>
        <textarea class="materialize-textarea" v-bind:id="id"></textarea>
        <label v-bind:for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        id: String,
        label: String
    }
}
</script>