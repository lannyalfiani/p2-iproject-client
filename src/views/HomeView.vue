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

  data() {
    return {
      username: localStorage.getItem(`username`),
      membership: localStorage.getItem(`status`),
      show: false
    }
  },

  methods: {
    ...mapActions(useIndexStore, [`payments`, `getPDF`]),

    showForm() {
      this.show = true
    }
  },
}

</script>

<template>

  <div class="container mt-5">

    <h4 class="display-5 text-center">Welcome to XPense Tracker</h4>
    <div class="text-center ">
      <div class="row d-flex align-content-sm-center p-5 ">

        <!-- Hello Card -->
        <div class=" text-center card col-6 p-5">
          <span>
            Hello, {{username}}!
          </span>
          <!-- <span class="mt-4">
            Membership: <span style="color:red;">{{membership}}</span>
          </span> -->
        </div>



        <!-- Premium card -->
        <div v-if="membership==='regular'" class="card col-6 text-center p-5">
          <span>
            Tired of the boring table?
          </span>
          <a @click.prevent="payments" id="pay-button" class="m-lg-4">Go premium</a>
        </div>

        <div v-if="membership==='premium'" class="card col-6 text-center p-5">
          <span>
            Membership: <span style="color:red;">{{membership}}</span>
          </span>
          <form class="mt-5" method="get" action="http://localhost:3000/reports?username=lanny&id=123">
            <button class="btn btn-primary" type="submit">Download Invoice</button>
          </form>
        </div>


      </div>


      <!-- <div class="row">
        <div class="col-3">
          <a @click.prevent="showForm" class="btn btn-primary d-flex flex-row">Add new Expense</a>
        </div>
      </div> -->

      <!-- v-if="show" -->
      <AddNewExpense class="mt-5" />
      <hr>
    </div>

    <ExpenseTable />

  </div>




</template>
