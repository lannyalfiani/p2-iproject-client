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

        <!-- Kalo udah deploy nanti tinggal diganti -->
        <form method="get" action="http://localhost:3000/reports?username=lanny&id=123">
            <button type="submit">Download!</button>
        </form>

        <button @click.prevent="getPDF">
            ambil PDF
        </button>

    </div>

</template>