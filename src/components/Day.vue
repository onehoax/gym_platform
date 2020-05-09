<template>
    <section class="container section">
        <hr>
        <div class="row">
            <h3 class="indigo-text text-darken-4">{{ day }}</h3>
            <plan-tabs :id="id" :day="day"></plan-tabs>
        </div>
    </section>
</template>

<script>
import planTab from '../components/TabsPlan'

export default {
    components: {
        'plan-tabs': planTab
    },
    // The id is to pass down to the TabsPlan component
    // bc each tab in this component needs a unique identifier;
    // <div id="videos " + id>...
    // <div id="meals " + id>...
    // This is needed bc there is more than 1 instance of the TabsPlans
    // component in the same parent component and the links need the corresponding
    // div to display; this cannot be done within that component as a data member
    // because data() must return a fresh copy of its members with each instantiation
    // therefore no data sharing is allowed between instances of the same component
    // (equivalent of static members in a java class)
    props: {
        day: {
            type: String
        },
        id: {
            type: String
        }
    }
}
</script>