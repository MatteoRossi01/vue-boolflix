<template>
    <li>
        <div>
            <img :src="imgUrl + imgSize + film.poster_path " alt="">
        </div>
        <div>{{film.title}}</div>
        <div>{{film.original_title}}</div>
        <lang-flag :iso="film.original_language"/>
        <div>{{film.vote_average}}</div>
    </li>
</template>

<script>
export default {
    name: 'FilmCard',
    props: {
        'film': Object
    },
    data(){
        return {
            imgSize : 'w185',
            imgUrl: 'https://image.tmdb.org/t/p/',
        }
    }
}
</script>

<style>

</style>