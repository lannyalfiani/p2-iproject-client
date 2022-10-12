<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';
import ExpenseTableRow from "../components/ExpenseTableRow.vue"

export default {
    name: `ExpenseTable`,

    components: {
        ExpenseTableRow
    },

    computed: {
        ...mapState(useIndexStore, [`expenses`])
    },

    methods: {
        ...mapActions(useIndexStore, [`fetchExpenses`]),
    },

    created() {
        this.fetchExpenses()
    }
}

</script>


<template>

    <div class="expense-table mt-5">
        <div class="">
            <div class="col-12 table-responsive ">
                <table class="table bg-light">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">No</th>
                            <th scope="col">Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <ExpenseTableRow v-for="(expense, index) in expenses" :key="expense.id" v-bind:expense="expense" v-bind:index="index" />
                        <!-- <td class="text-center">{{index+1}}</td>
                        <td>{{expense.name}}</td>
                        <td>{{expense.amount}}</td>
                        <td>{{expense.date}}</td>
                        <td>{{expense.Category.name}}</td>
                        <td> -->
                        <!-- <button class="btn">Edit</button> -->
                        <!-- <a href="">Edit</a> -->
                        <!-- </td> -->
                    </tbody>
                </table>
            </div>

        </div>
    </div>


</template>