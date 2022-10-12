<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores/index';
import AddNewExpense from "../components/AddNewExpenseForm.vue"
import ExpenseTable from "../components/ExpenseTable.vue"

export default {
  name: `Home`,
  components: {
    AddNewExpense,
    ExpenseTable
  },

  methods: {
    ...mapActions(useIndexStore, [`payments`])
  },


}

</script>

<template>

  <div class="container">
    <h4 class="display-5 mt-5 mb-5 text-center">Welcome to XPense Tracker</h4>
    <hr>



    <!-- Nanti pindahin ke Premium aja langsung -->
    <!-- <button @click.prevent="this.payments()" id="pay-button" class="btn btn-primary">Buy Premium account</button> -->



    <AddNewExpense />
    <hr>
    <div class="text-center">
      <!-- <p>Tired of this boring table?</p> -->

      <div class="card">
        <div class="card-body">
          <span class="mr-5">
            Tired of this boring table?
          </span>
          <button @click.prevent="this.payments()" id="pay-button" class="btn btn-primary m-5">Go Premium</button>
        </div>
      </div>
    </div>
    <ExpenseTable />



  </div>




</template>
