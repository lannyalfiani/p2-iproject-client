<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';

export default {
    name: `ChartDraft`,

    computed: {
        ...mapState(useIndexStore, [`forPieChart`])
    },

    methods: {
        ...mapActions(useIndexStore, [`showPie`]),
    },

    // created() {

    // },

    async mounted() {
        await this.showPie()

        let data = this.forPieChart.data

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: this.forPieChart.labels,
                datasets: [{
                    label: 'Total expense per category',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

</script>


<template>
    <!-- <pre>{{forPieChart}}</pre> -->

    <div class="container border-1 bg-light mt-5 text-center">
        <h4 class="text-center">Expense per category</h4>

        <div style="width: 600px;height: 600px">
            <canvas style="width: 500px;height: 500px" id="myChart"></canvas>
        </div>
    </div>

</template>
