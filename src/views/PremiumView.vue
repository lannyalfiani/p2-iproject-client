<script>
import { mapActions } from 'pinia';
import Chart from '../components/Chart.vue'
import { useIndexStore } from '../stores';


export default {
    name: `Premium`,

    components: {
        Chart
    },

    methods: {
        ...mapActions(useIndexStore, [`getPDF`])
    }


}

</script>


<template>

    <div class="container mt-5">

        <h1>Premium Area</h1>


        <Chart />


        <button @click.prevent="getPDF">Get PDF</button>

    </div>

</template>