<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores';


export default {
    name: `RegisterView`,

    data() {
        return {
            registerData: {
                username: "",
                email: "",
                password: ""
            }
        }
    },

    methods: {
        ...mapActions(useIndexStore, [`register`]),

        handleRegister() {
            this.register(this.registerData)
        }
    }

}

</script>



<template>

    <div class="container mt-5 bg-light shadow-lg">
        <div class=" register-section">
            <div class="p-5 form-register">

                <form @submit.prevent="register(registerData)" method="post">
                    <h2>Register</h2>
                    <!-- <p>Shop!</p> -->
                    <hr>
                    <!-- Username -->
                    <div class="mb-3">
                        <label for="register-username" class="form-label">Username</label>
                        <input required v-model="registerData.username" type="text" class="form-control"
                            id="register-username" placeholder="customer">
                    </div>

                    <!-- Email address -->
                    <div class="mb-3">
                        <label for="register-email" class="form-label">Email address</label>
                        <input required v-model="registerData.email" type="email" class="form-control"
                            id="register-email" placeholder="customer@gmail.com">
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label for="register-password" class="form-label">Password</label>
                        <input required v-model="registerData.password" type="password" class="form-control"
                            id="register-password" placeholder="r4h4s14">
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
                <div class="container mt-5">
                    Have an account?
                    <span>
                        <a @click="$router.push('/login')" href="">Login</a>
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>