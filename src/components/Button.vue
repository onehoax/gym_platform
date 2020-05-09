<template>
    <div v-bind:class="divClasses">
        <button v-bind:class="buttonClasses">{{ text }}</button>
    </div>
</template>

<script>
export default {
    props: {
        divClasses: String,
        buttonClasses: String,
        text: String
    }
}
</script>