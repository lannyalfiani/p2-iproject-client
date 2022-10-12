<script>
// const Chart = require('chart.js');
// import { Chart } from "chart.js"
import Chart from 'chart.js/auto';
import { mapState } from 'pinia';
import { useIndexStore } from '../stores';

export default {
    name: `Chart`,

    computed: {
        ...mapState(useIndexStore, [`expenses`])
    },

    mounted() {
        console.log('mounted')
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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

    <div class="container border-1 bg-light mt-5">
        <h4>Nanti chart</h4>

        <div style="width: 500px;height: 500px">
            <canvas id="myChart"></canvas>
        </div>
    </div>





</template>
