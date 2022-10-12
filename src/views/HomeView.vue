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
    <h4 class="h3 mb-3 display-1 mt-5 text-center">Welcome to XPense</h4>

    <!-- Nanti pindahin ke Premium aja langsung -->
    <button @click.prevent="this.payments()" id="pay-button" class="btn btn-primary">Buy Premium account</button>



    <AddNewExpense />
    <hr>
    <ExpenseTable />



  </div>




</template>
