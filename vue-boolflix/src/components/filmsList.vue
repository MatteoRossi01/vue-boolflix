<template>
    <div>
        <h1 class="title">Film</h1>
        <ul> 
            <FilmCard v-for="(film, index) in films" :key="index" :film='film' />
        </ul>
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
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .title {
        color: #000;
        margin-top: 30px;
        margin-bottom: -20px;
    }

</style>