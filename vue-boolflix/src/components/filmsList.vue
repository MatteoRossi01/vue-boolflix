<template>
    <div>
        <FilmCard v-for="(film, index) in films" :key="index" :film='film' />
    </div>
</template>

<script>
import FilmCard from "./partials/FilmCard.vue"
export default {
    name: 'filmsList',
    props: {
        'films': Array,
    },
    components: {
        FilmCard,
    }
}
</script>

<style>

</style>