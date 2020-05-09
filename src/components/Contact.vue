<template>
    <section class="container section scrollspy" id="Contactanos">
        <div class="row">
            <div class="col s12 l5">
                <h2 class="indigo-text text-darken-4">Contactanos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sint cumque sequi id eos similique sed, quod ad nisi voluptas delectus, perspiciatis ab eveniet aperiam? Rem quam velit aut aliquid!</p>
            </div>
            <div class="col s12 l5 offset-l2">
                <form action="">
                    <vue-input 
                        icon="email"
                        type="email"
                        id="email"
                        label="Your Email">
                    </vue-input>
                    <vue-text-area
                        icon="message"
                        id="message"
                        label="Your Message">
                    </vue-text-area>
                    <vue-button
                        divClasses="input-field center"
                        buttonClasses="btn"
                        text="Submit">
                    </vue-button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import input from './Input'
import textArea from './TextArea'
import button from './Button'

export default {
    components: {
        'vue-input': input,
        'vue-text-area': textArea,
        'vue-button': button
    }
}
</script>