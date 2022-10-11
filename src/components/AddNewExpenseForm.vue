<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';


export default {
    name: `AddNewExpense`,

    data() {
        return {
            dataInput: {
                name: "",
                amount: "",
                date: "",
                CategoryId: ""
            }
        }
    },

    computed: {
        ...mapState(useIndexStore, [`categories`])
    },

    methods: {
        ...mapActions(useIndexStore, [`fetchCategories`, `addExpense`]),

        handleAddExpense() {
            this.addExpense(this.dataInput)
        }
    },

    created() {
        this.fetchCategories()
    }
}

</script>


<template>
    <div class="bg-light" id="Add-New-Expense">
        <h3 class="mb-5 border-1">Add new expense</h3>

        <form @submit.prevent="handleAddExpense" class="row">

            <div class="col-auto">
                <label for="expense-name">Expense Name</label>
                <input v-model="dataInput.name" type="text" class="form-control" id="expense-name"
                    placeholder="Groceries">
            </div>


            <div class="col-auto">
                <label for="expense-amount">Amount</label>
                <input v-model="dataInput.amount" type="number" class="form-control" id="expense-amount"
                    placeholder="50,000">
            </div>

            <div class="col-auto">
                <label for="expense-date">Date</label>
                <input v-model="dataInput.date" type="date" class="form-control" id="expense-date">
            </div>

            <div class="col-auto">
                <label for="expense-date">Category</label>
                <select v-model="dataInput.CategoryId" class="form-select" aria-label="Default select example">
                    <option disabled selected value="">Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}
                    </option>
                </select>
            </div>

            <div class="col-auto">
                <button class="btn btn-outline-primary" type="submit">Add</button>
            </div>

        </form>
    </div>


</template>
