<template>
    <div class="row">
        <div class="col s12 l12">
            <!-- router-link gives me trouble with parallax and sidenav (which use materialize and jquery);
            it doesn't allow the sidenav functionality when the router link is followed to any plan
            (page has to be refreshed for it to work) and parallax don't show up anymore when I go back
            to home page from another page; the normal anchor tag does not present this problem -->
            <!-- <h3><router-link :to="{ name: 'PlanView', params: { planName: this.planToLowerCase } }" class="indigo-text text-darken-4">{{ title }}</router-link></h3> -->

            <!-- Render as link only if in PlansView route -->
            <h3 v-if="this.$route.name == 'Home'" class="indigo-text text-darken-4">{{ title  }}</h3>
            <h3 v-else><a :href="path" class="indigo-text text-darken-4">{{ title }}</a></h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String
    },
    computed: {
        planToLowerCase: function() {
            return this.title.toLowerCase()
        },
        path: function() {
            return '/plans/' + this.planToLowerCase
        }
    },
}
</script>