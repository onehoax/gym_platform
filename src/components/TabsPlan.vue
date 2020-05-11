<template>
    <div class="col s12 l12">
        <ul class="tabs" ref="tabs">
            <li class="tab col s6">
                <a :href="'#' + videosId" class="indigo-text text-darken-4">Videos</a>
            </li>
            <li class="tab col s6">
                <a :href="'#' + mealsId" class="indigo-text text-darken-4">Alimentaci&oacute;n</a>
            </li>
        </ul>
        <div class="col s12" :id="videosId">
            <!-- <p class="flow-text indigo-text text-darken-4">ENTRENAMIENTO FUNCIONAL</p> -->
            <!-- Display videos corresponding to this.day -->
            <vue-video 
                videosrc="all.mp4" 
                title="Pecho" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere voluptatum autem nam odit pariatur nesciunt! Porro, doloremque voluptas eveniet magni consectetur ut voluptatem inventore totam eum, temporibus ad deleniti?">
            </vue-video>
            <vue-video 
                videosrc="all.mp4" 
                title="Espalda" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere voluptatum autem nam odit pariatur nesciunt! Porro, doloremque voluptas eveniet magni consectetur ut voluptatem inventore totam eum, temporibus ad deleniti?">
            </vue-video>
        </div>
        <div class="col s12" :id="mealsId">
            <!-- <p class="flow-text indigo-text text-darken-4">NUTRIC&Oacute;N</p> -->
            <ul>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit ipsum blanditiis rerum neque commodi, odio voluptas incidunt unde temporibus quisquam id voluptatum voluptates velit natus excepturi, veritatis sed. Quae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quidem. Porro dignissimos, molestias at ullam totam quos, illo, consequuntur vero nobis nemo libero numquam necessitatibus consequatur voluptate voluptatum quasi neque.</p>
                </li>
            </ul>
        </div>
    </div> 
</template>

<script>
import M from 'materialize-css'
import vueVideo from './Video'

export default {
    components: {
        'vue-video': vueVideo
    },
    props: {
        // Each tab needs a unique identifier
        id: {
            type: String
        },
        // So we can get the videos for the correct day
        day: {
            type: String
        }
    },
    computed: {
        videosId: function() {
            return 'videos' + this.id
        },
        mealsId: function() {
            return 'meals' + this.id
        }
    },
    mounted() {
        // initialize tabs functionality with materliaze
        M.Tabs.init(this.$refs.tabs);
    }
 }
</script>