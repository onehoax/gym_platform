<template>
    <div class="modal" :id="id" ref="modal">
        <div class="modal-content">
            <h4 class="indigo-text text-darken-3 center">{{ name }}</h4>
            <form action="" :id="'signup-form-' + name" ref="formRef" @submit.prevent="print()">
                <div class="input-field">
                    <input type="email" :id="'signup-email-' + name" required ref="emailRef">
                    <label for="signup-email">Tu Email</label>
                </div>
                <div class="input-field">
                    <input type="password" :id="'signup-password-' + name" required>
                    <label for="signup-password">Tu Contrase&ntilde;a</label>
                </div>
                <div class="input-field center">
                    <button class="btn darken-2">{{ name }}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { auth } from '../firebase/auth'
import M from 'materialize-css'

export default {
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
    },
    methods: {
        print: function() {
            // access the value elment directly by including a ref in the element
            const email = this.$refs.emailRef.value
            // access the value of the input through the parent form
            const password = this.$refs.formRef[this.passwordId].value
            console.log(email, password)

            auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred.user)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    data() {
        return {
            emailId: '',
            passwordId: '',
        }
    },
    mounted() {
        this.emailId = 'signup-email-' + this.name
        this.passwordId = 'signup-password-' + this.name
        console.log(this.$refs.formRef)
        console.log(this.$refs.emailRef)
        console.log(process.env.VUE_APP_FIREBASE_API_KEY)

        // initialize the modal functionality with materialize
        M.Modal.init(this.$refs.modal);
    }
 }
</script>