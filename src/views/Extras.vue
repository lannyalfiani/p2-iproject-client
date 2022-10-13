<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores/index'
import NewsCard from '../components/NewsCard.vue'


export default {
    name: `Extras`,

    components: {
        NewsCard
    },

    computed: {
        ...mapState(useIndexStore, [`news`])
    },

    methods: {
        ...mapActions(useIndexStore, [`fetchNews`])
    },

    created() {
        this.fetchNews()
    }
}
</script>


<template>

    <div class="container">
        <h4 class="display-5 mt-5 mb-5 text-center">Extras</h4>

        <h2 class="display-9 mt-3 mb-5 text-center">Source: The Jakarta Post, Economy</h2>
        <hr>

        <div class="container text-center mt-5">
            <div class="row">
                <NewsCard v-for="(item, index) in news" :key="index" v-bind:item="item" />
            </div>
        </div>
    </div>


</template>