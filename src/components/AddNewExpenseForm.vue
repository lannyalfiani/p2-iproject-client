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
            },
        }
    },

    computed: {
        ...mapState(useIndexStore, [`categories`])
    },

    methods: {
        ...mapActions(useIndexStore, [`fetchCategories`, `addExpense`]),

        handleAddExpense() {
            this.addExpense(this.dataInput)

            this.dataInput.name=""
            this.dataInput.amount=""
            this.dataInput.date=""
            this.dataInput.CategoryId=""


        },
    },

    created() {
        this.fetchCategories()
    }
}

</script>


<template>

    <div class="bg-light" id="Add-New-Expense">

        <div class="container">
            <h3 class="mb-5 pt-3 border-1">Add new expense</h3>

            <form @submit.prevent="handleAddExpense" class="row">

                <div class="col-3 mb-2">
                    <label for="expense-name" class="mb-2">Expense Name</label>
                    <input required v-model="dataInput.name" type="text" class="form-control " id="expense-name"
                        placeholder="Arisan">
                </div>


                <div class="col-2 mb-2">
                    <label for="expense-amount" class="mb-2">Amount</label>
                    <input min="100" required v-model="dataInput.amount" type="number" class="form-control" id="expense-amount"
                        placeholder="50000">
                </div>

                <div class="col-3 mb-2">
                    <label for="expense-date" class="mb-2">Date</label>
                    <input min="2010-01-01" required v-model="dataInput.date" type="date" class="form-control" id="expense-date" >
                </div>

                <div class="col-3 mb-2">
                    <label for="expense-date" class="mb-2">Category</label>
                    <select required v-model="dataInput.CategoryId" class="form-select" aria-label="Default select example">
                        <option disabled selected value="">Select Category</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}
                        </option>
                    </select>
                </div>

                <div class="col-1 d-flex align-items-end mb-2">
                    <button class="btn btn-secondary" type="submit">Add</button>
                </div>

            </form>
        </div>
    </div>


</template>
