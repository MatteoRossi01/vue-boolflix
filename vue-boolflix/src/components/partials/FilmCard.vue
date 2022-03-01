<template>
    <li>
        <div>
            <img :src="imgUrl + imgSize + film.poster_path " alt="">
        </div>
        <div>{{film.title}}</div>
        <div>{{film.original_title}}</div>
        <lang-flag :iso="film.original_language"/>
        <StarVote :film="film"/>
    </li>
</template>

<script>
import StarVote from './StarVote.vue'

export default {
    name: 'FilmCard',
    components: {
        StarVote,
    },
    props: {
        'film': Object,
        'serie': Object
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