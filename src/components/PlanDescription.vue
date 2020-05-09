<template>
    <section class="container section">
        <div class="row">
            <div class="col s12 l12">
                <h2 class="indigo-text text-darken-4">Plan: {{ planToUpperCase }}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos corrupti praesentium cumque sapiente deserunt provident ab recusandae quae odit numquam, quaerat dicta id velit. Quo laudantium unde repellendus autem ipsa.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        description: {
            type: String
        }
    },
    computed: {
        planToUpperCase: function() {
            return this.name[0].toUpperCase() + this.name.slice(1)
        }
    }
}
</script>