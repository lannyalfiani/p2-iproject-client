<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores/index';



export default {
    name: `Sectors`,

    methods: {
        ...mapActions(useIndexStore, [`fetchSectors`])
    },

    computed: {
        ...mapState(useIndexStore, [`sectors`])
    },

    created() {
        this.fetchSectors()
    }
}

</script>


<template>
<pre>{{sectors}}</pre>



</template>