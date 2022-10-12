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
        <h1 class="mt-5 text-center">Premium Area</h1>


        <div class="border 1px solid black">
            <h4>Username: {{username}}</h4>
            <h4>Status: {{status}}</h4>
        </div>

        <!-- nanti kasih v-if cuma muncul kalo statusnya regular -->
        <h5 class="mt-5">Tired of boring table? Get premium account today</h5>

        <!-- nanti kasih v-if cuma muncul kalo statusnya premium -->
        <!-- Kalo udah deploy nanti ganti URL di action -->
        <form class="mt-5" method="get" action="http://localhost:3000/reports?username=lanny&id=123">
            <button class="btn btn-primary" type="submit">Download Invoice</button>
        </form>


        <!-- nanti kasih v-if cuma muncul kalo statusnya premium -->
        <PieChart />






    </div>

</template>