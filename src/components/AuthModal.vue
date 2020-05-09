<template>
    <div class="modal" :id="id">
        <div class="modal-content">
            <h4 class="indigo-text text-darken-3 center">{{ name }}</h4>
            <form action="" :id="'signup-form' + name">
                <div class="input-field">
                    <input type="email" :id="'signup-email' + name" required>
                    <label for="signup-email">Tu Email</label>
                </div>
                <div class="input-field">
                    <input type="password" :id="'signup-password' + name" required>
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
export default {
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
    }
 }
</script>