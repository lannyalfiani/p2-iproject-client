<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores/index';
import AddNewExpense from "../components/AddNewExpenseForm.vue"

export default {
  name: `Home`,
  components: {
    AddNewExpense
  },


  computed: {
    ...mapState(useIndexStore, [`expenses`])
  },

  methods: {
    ...mapActions(useIndexStore, [`payments`, `fetchExpenses`])
  },

  created() {
    this.fetchExpenses()
  }
}

</script>

<template>

  <div class="container">
    <h1 class="h3 mb-3 display-1 mt-5">Welcome to Xpense</h1>
    <button @click.prevent="this.payments()"
   id="pay-button" class="btn btn-primary">Buy Premium account</button>

    <AddNewExpense />


    <!-- TABEL -->
    <div class="expense-table">
      <div class="mt-5">
        <div class="col-12 table-responsive">
          <table class="table bg-light">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-for="(expense, index) in expenses" :key="expense.id">
              <td>{{ index + 1}}</td>
              <td>{{expense.name}}</td>
              <td>{{expense.amount}}</td>
              <td>{{expense.date}}</td>
              <td>{{expense.Category.name}}</td>
              <td>
                <!-- <button class="btn">Edit</button> -->
                <a href="">Edit</a>
              </td>
            </tbody>
          </table>
        </div>

      </div>
    </div>



  </div>




</template>
