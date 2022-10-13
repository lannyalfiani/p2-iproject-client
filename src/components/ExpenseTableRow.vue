<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores';


export default {
    name: `ExpenseTableRow`,

    props: [`expense`, `index`],

    computed: {
        toRupiah() {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(this.expense.amount);
        },

        formatDate() {
            return new Date(this.expense.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: 'long'
                // hour: "2-digit",
                // minute: "2-digit",
                // second: "2-digit",
                // let option = { weekday: 'long' , year: 'numeric' , month: 'long' , day: 'numeric' }

            })
        }




    },

    methods: {
        ...mapActions(useIndexStore, [`deleteExpense`])
    }

}



</script>


<template>
    <tr>
        <td class="text-center">{{index+1}}</td>
        <td>{{expense.name}}</td>
        <td>{{(toRupiah)}}</td>
        <!-- <td>{{expense.date}}</td> -->
        <td>{{(formatDate)}}</td>

        <td>{{expense.Category.name}}</td>
        <td>
            <a class="mr-2" @click.prevent="deleteExpense(expense.id)" href="">Delete</a>
            <!-- <a class="ml-2" href="">Edit</a> -->
            <!-- <button class="ml-2">Edit</button> -->
        </td>
    </tr>

</template>