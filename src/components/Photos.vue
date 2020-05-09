<template>
    <section class="container section scrollspy" id="photos">
        <photo 
            image="train.png"
            description="train"
            classes="responsive-img materialboxed photo"
            title="Entrena"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum excepturi odit alias consequatur perferendis adipisci ad ratione exercitationem vitae omnis deleniti id mollitia, quam facere necessitatibus vero quis quos?">
        </photo>
        <photo 
            image="nutrition.jpg"
            description="nutrition"
            classes="responsive-img materialboxed photo"
            title="Nutrete"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum excepturi odit alias consequatur perferendis adipisci ad ratione exercitationem vitae omnis deleniti id mollitia, quam facere necessitatibus vero quis quos?">
        </photo>
        <photo 
            image="goal.jpg"
            description="goal"
            classes="responsive-img materialboxed photo"
            title="Alcanza Tus Metas"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum excepturi odit alias consequatur perferendis adipisci ad ratione exercitationem vitae omnis deleniti id mollitia, quam facere necessitatibus vero quis quos?">
        </photo>
    </section>
</template>

<script>
import photo from './Photo'

export default {
    components: {
        'photo': photo
    }
}
</script>

<style>
    .photo {
        margin-top: 3vw;
    }
</style>