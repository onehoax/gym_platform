<template>
    <div class="modal" :id="id" ref="modal">
        <div class="modal-content">
            <h4 class="indigo-text text-darken-3 center">{{ name }}</h4>
            <form v-if="this.id == 'modal-signup'" action="" :id="'signup-form-' + name" ref="formRef" @submit.prevent="signup()">
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
            <form v-else action="" :id="'signup-form-' + name" ref="formRef" @submit.prevent="login()">
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
        signup: function() {
            // access the value elment directly by including a ref in the element
            const email = this.$refs.emailRef.value
            // access the value of the input through the parent form
            const password = this.$refs.formRef[this.passwordId].value
            // console.log('register', email, password)

            // create a new user in firebase auth; automatically logs the user in
            auth.createUserWithEmailAndPassword(email, password)
            .then(cred => {
                console.log(cred.user)
                this.$router.push('/plans')
            })
            .catch(err => {
                alert('Wrong username or password: ' + err)
            })

            // close the modal when the user clicks the submit button
            M.Modal.getInstance(this.$refs.modal).close();
            // reset the form to clear out its fields after successful submission
            this.$refs.formRef.reset();
        },
        login: function() {
            // access the value elment directly by including a ref in the element
            const email = this.$refs.emailRef.value
            // access the value of the input through the parent form
            const password = this.$refs.formRef[this.passwordId].value
            // console.log('login', email, password)

            auth.signInWithEmailAndPassword(email, password)
            .then( cred => {
                console.log(cred.user)
                this.$router.push('/plans')
            })
            .catch( err => {
                alert('Wrong username or password: ' + err)
            })

            // close the modal when the user clicks the submit button
            M.Modal.getInstance(this.$refs.modal).close();
            // reset the form to clear out its fields after successful submission
            this.$refs.formRef.reset()
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
        // console.log(this.$refs.formRef)
        // console.log(this.$refs.emailRef)
        // console.log(process.env.VUE_APP_FIREBASE_API_KEY)

        // initialize the modal functionality with materialize
        M.Modal.init(this.$refs.modal);
    }
 }
</script>