<template>
    <li>
        <div>
            <img :src="imgUrl + imgSize + film.poster_path " alt="">
        </div>
        <div>{{serie.name}}</div>
        <div>{{serie.original_name}}</div>
        <lang-flag :iso="serie.original_language"/>
        <StarVote :film="film"/>
    </li>
</template>

<script>
import StarVote from './StarVote.vue'

export default {
    name: 'SerieCard',
    components: {
        StarVote,
    },
    props: {
        'serie': Object,
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