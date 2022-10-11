<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores/index';



export default {
  name: `Home`,

  methods: {
    ...mapActions(useIndexStore, [`payments`])
  }
}

</script>

<template>

  <h1>Home</h1>

  <button @click.prevent="this.payments()" id="pay-button" class="btn btn-primary">Buy Premium account</button>

</template>
