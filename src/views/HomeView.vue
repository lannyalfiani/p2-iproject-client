<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores/index';
import AddNewExpense from "../components/AddNewExpenseForm.vue"
import ExpenseTable from "../components/ExpenseTable.vue"
// import EditExpense from "../components/EditExpense.vue"

export default {
  name: `Home`,
  components: {
    AddNewExpense,
    ExpenseTable,
    // EditExpense
  },

  data() {
    return {
      username: localStorage.getItem(`username`),
      // membership: localStorage.getItem(`status`),
      show: false
    }
  },

  computed: {
    ...mapState(useIndexStore, [`isPremium`])
  },

  methods: {
    ...mapActions(useIndexStore, [`payments`, `getPDF`, `checkPremium`]),

    showForm() {
      this.show = true
    }
  },

  created() {
    this.checkPremium()
  }

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
          <span v-if="isPremium" class="mt-4">
            You are priviledged for a pretty chart
          </span>
          <span v-if="!isPremium" class="mt-4">
            Membership: <span>Regular</span>
          </span>
        </div>



        <!-- Premium card -->
        <div v-if="!isPremium" class="card col-6 text-center p-5">
          <span>
            Tired of the boring table?
          </span>
          <a style="hover:background-color:blue; cursor: pointer" @click.prevent="payments" id="pay-button" class="m-lg-4">Go premium</a>
        </div>

        <div v-if="isPremium" class="card col-6 text-center p-5">
          <span>
            Membership: <span style="color:red;">Premium</span>
          </span>
          <!-- <form class="mt-5" method="get" action="http://localhost:3000/reports?username=lanny&id=123">
            <button class="btn btn-primary" type="submit">Download Invoice</button>
          </form> -->
          <form class="mt-5" method="get" action="https://blooming-sands-84563.herokuapp.com/reports">
            <button class="btn btn-primary" type="submit">Download Invoice</button>
          </form>
        </div>


      </div>
      <AddNewExpense class="mt-5" />

      <!-- <EditExpense /> -->
      <hr>
    </div>

    <ExpenseTable />

  </div>




</template>
