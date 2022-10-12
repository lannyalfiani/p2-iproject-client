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
        <td>{{expense.date}}</td>
        <td>{{expense.Category.name}}</td>
        <td>
            <a @click.prevent="deleteExpense(expense.id)" href="">Delete</a>
        </td>
    </tr>

</template>