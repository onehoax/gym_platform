<template>
    <div class="input-field">
        <i class="material-icons prefix">{{ icon }}</i>
        <input v-bind:type="type" v-bind:id="id">
        <label v-bind:for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        type: String,
        id: String,
        label: String
    }
}
</script>