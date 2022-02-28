<template>
    <li>
        <div>{{film.title}}</div>
        <div>{{film.original_title}}</div>
        <div>{{film.original_language}}</div>
        <div>{{film.vote_average}}</div>
    
    </li>
</template>

<script>
export default {
    name: 'FilmCard',
    props: {
        'film': Object
    }
}
</script>

<style>

</style>