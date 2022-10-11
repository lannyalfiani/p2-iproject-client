<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: `App`,

  components: {
    Navbar
  }
}

</script>

<template>

  <!-- <h1>Ya</h1> -->
  <Navbar />

  <RouterView />


</template>
