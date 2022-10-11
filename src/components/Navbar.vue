<script>
import { mapState } from 'pinia';
import { useIndexStore } from '../stores';



export default {
    name: `Navbar`,

    data() {
        return {
            status: localStorage.getItem(`status`)
        }
    },


    computed: {
        ...mapState(useIndexStore, [`isLoggedIn`])
    }
}


</script>


<template>
    <section class="navbar-section sticky-top" id="navbar-section">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <!-- <img src="https://yt3.ggpht.com/ytc/AMLnZu_Y_jCSjP7C_XemvkfWHR6ubejWiSDWUSYMpOPc=s900-c-k-c0x00ffffff-no-rj"
                        alt="Logo" width="35" height="35" class="d-inline-block align-text-top object-cover"> -->
                        <img src="../assets/logo3.png" height="50" alt="">
                </div>

                <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a @click.prevent="this.$router.push(`/`)" class="nav-link" aria-current="page"
                                href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="this.$router.push(`/premium`)" class="nav-link" href="#">Premium Area</a>
                        </li>
                        <li v-if="isLoggedIn" class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li v-if="isLoggedIn" class="nav-item">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>