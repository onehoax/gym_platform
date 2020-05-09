<template>
    <div class="row">
        <div class="col s12 l8">
            <video controls class="responsive-video materialboxed">
                <source :src="require('../assets/' + videosrc)" type="video/mp4">
            </video>
        </div>
        <div class="col s12 l4">
            <h5>{{ title }}</h5>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videosrc: {
            type: String
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    }
}
</script>

<style scoped>
    /* video {
        width: 40vw;
        height: 25vw;
    } */

    .row {
        margin-top: 10px;
    }

    /* @media screen and (max-width: 992px) {
        video {
            width: 80vw;
            height: 50vw;
        }
    } */
</style>