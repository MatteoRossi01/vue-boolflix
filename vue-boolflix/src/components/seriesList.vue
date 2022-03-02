<template>
    <div>
        <h1 class="title">Serie</h1>
        <ul>
            <SerieCard v-for="(serie, index) in series" :key="index" :serie='serie' />
        </ul>
    </div>
    
</template>

<script>
import SerieCard from "./partials/SerieCard.vue"
export default {
    name: 'seriesList',
    props: {
        'series': Array,
    },
    components: {
        SerieCard,
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .title {
        color: #000;
        margin-top: 30px;
        margin-bottom: -20px;
    }
</style>