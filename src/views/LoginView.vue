<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores/index'


export default {
    name: `LoginView`,

    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        }
    },

    methods: {
        ...mapActions(useIndexStore, [`login`]),

        handleLogin() {
            this.login(this.loginData)
        }
    }


}

</script>

<template>
    <div class="container bg-light shadow-lg mt-5 mb-5">
        <div class="form-login p-5 justify-content-center">
            <form @submit.prevent="handleLogin" method="post" class="container">
                <h2>Sign In</h2>
                <br>
                <hr>

                <!-- Email -->
                <div class="mb-3">
                    <label for="login-email" class="form-label">Email address</label>
                    <input required v-model="loginData.email" type="email" class="form-control" id="login-email"
                        placeholder="name@example.com">
                </div>

                <!-- Password -->
                <div class="mb-3">
                    <label for="login-password" class="form-label">Password</label>
                    <input required v-model="loginData.password" type="password" class="form-control"
                        id="login-password" placeholder="r4h4s14">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>

            </form>
            <div class="container mt-5">
                <a @click.prevent="this.$router.push(`/register`)" href="">Don't have an account?</a>
            </div><br><br>


        </div>
    </div>


</template>
