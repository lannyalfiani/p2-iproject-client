<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';



export default {
    name: `Navbar`,

    // data() {
    //     return {
    //         membership: localStorage.getItem(`status`),
    //     }
    // },


    computed: {
        ...mapState(useIndexStore, [`isLoggedIn`, `isPremium`])
    },

    methods: {
        ...mapActions(useIndexStore, [`logout`, `checkLogin`, `checkPremium`])
    },

    created() {
        this.checkLogin()
        this.checkPremium()
    }
}


</script>


<template>
    <section class="navbar-section sticky-top" id="navbar-section">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <img src="../assets/logo3.png" height="50" alt="">
                </div>

                <div v-if="isLoggedIn" class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a @click.prevent="this.$router.push(`/`)" class="nav-link" aria-current="page"
                                href="#">Home</a>
                        </li>
                        <li v-if="isPremium" class="nav-item">
                            <a @click.prevent="this.$router.push(`/premium`)" class="nav-link" href="#">Premium</a>
                        </li>
                        <li v-if="!isLoggedIn" class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li v-if="!isLoggedIn" class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="this.$router.push(`/extras`)" class="nav-link" href="#">Extras</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>