<template>
    <section class="container section scrollspy" id="Planes" ref="scroll">
        <h2 class="center-align"><a class="indigo-text text-darken-4" href="/plans">Planes</a></h2>
        <hr>
        <plan 
            title="Principiante"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corrupti praesentium cumque sapiente deserunt provident ab recusandae quae odit numquam, quaerat dicta id velit. Quo laudantium unde repellendus autem ipsa.">
        </plan>
        <plan 
            title="Intermedio"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corrupti praesentium cumque sapiente deserunt provident ab recusandae quae odit numquam, quaerat dicta id velit. Quo laudantium unde repellendus autem ipsa.">
        </plan>
        <plan 
            title="Avanzado"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corrupti praesentium cumque sapiente deserunt provident ab recusandae quae odit numquam, quaerat dicta id velit. Quo laudantium unde repellendus autem ipsa.">
        </plan>
        <plan 
            title="Alpha"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corrupti praesentium cumque sapiente deserunt provident ab recusandae quae odit numquam, quaerat dicta id velit. Quo laudantium unde repellendus autem ipsa.">
        </plan>
    </section>
</template>

<script>
import M from 'materialize-css'
import plan from './Plan'

export default {
    components: {
        'plan': plan
    },
    mounted() {
        // initialize scroll functionality with materialize
        M.ScrollSpy.init(this.$refs.scroll);
    }
}
</script>