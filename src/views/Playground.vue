<script>
import ChartDraft from "../components/PieChart.vue"



export default {
    name: `Playground`,

    components: {
        // ChartDraft
    },





}

</script>


<template>


    <div class="container">
        <h4 class="display-5 mt-5 mb-5 text-center">Welcome to XPense Tracker</h4>
        <hr>







        <div class="bg-light" id="Add-New-Expense">

            <div class="container mt-3 ">
                <h3 class="mb-5 border-1 text-center">Add new expense</h3>

                <form class="row" id="newform">

                    <div class="col-3 mb-2">
                        <label for="expense-name">Expense Name</label>
                        <input required type="text" class="form-control" id="expense-name" placeholder="Arisan">
                    </div>


                    <div class="col-2 mb-2">
                        <label for="expense-amount">Amount</label>
                        <input min="100" type="number" class="form-control" id="expense-amount" placeholder="50000">
                    </div>

                    <div class="col-3 mb-2">
                        <label for="expense-date">Date</label>
                        <input min="2010-01-01" required type="date" class="form-control" id="expense-date">
                    </div>

                    <div class="col-3 mb-2">
                        <label for="expense-date">Category</label>
                        <select required class="form-select" aria-label="Default select example">
                            <option disabled selected value="">Select Category</option>
                            <option>
                                Category
                            </option>
                        </select>
                    </div>

                    <div class="col-1 d-flex align-items-end mt-3">
                        <button class="btn btn-outline-primary" type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>

    </div>





</template>

<style>
#newform {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>