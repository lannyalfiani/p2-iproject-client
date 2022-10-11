<script>


export default {
    name: `Navbar`,

    data() {
        return {
            status: localStorage.getItem(`status`)
        }
    }
}


</script>


<template>
    <section class="navbar-section sticky-top" id="navbar-section">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu_Y_jCSjP7C_XemvkfWHR6ubejWiSDWUSYMpOPc=s900-c-k-c0x00ffffff-no-rj"
                        alt="Logo" width="35" height="35" class="d-inline-block align-text-top object-cover">
                </div>

                <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Premium Area</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
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