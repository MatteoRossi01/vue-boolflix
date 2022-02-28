<template>
    <div>
        <SerieCard v-for="(serie, index) in series" :key="index" :serie='serie' />
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

</style>