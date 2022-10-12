<script>
import { mapActions } from 'pinia';
import Chart from '../components/Chart.vue'
import { useIndexStore } from '../stores';
import PieChart from "../components/PieChart.vue"


export default {
    name: `Premium`,

    components: {
        Chart,
        PieChart
    },

    data() {
        return {
            username: localStorage.getItem(`username`),
            status: localStorage.getItem(`status`)
        }
    },

    methods: {
        ...mapActions(useIndexStore, [`getPDF`])
    }


}

</script>


<template>

    <div class="container mt-5">
        <h1 class="display-5 mt-5 mb-5 text-center">Premium Area</h1>

        <!-- <p class="text text-center">Your priviledge of being a premium member, a beautiful chart:</p> -->

        <!-- nanti kasih v-if cuma muncul kalo statusnya premium -->
        <PieChart />






    </div>

</template>