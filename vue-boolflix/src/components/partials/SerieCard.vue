<template>
    <li>
        <div>
            <img :src="imgUrl + imgSize + film.poster_path " alt="">
        </div>
        <div>{{serie.name}}</div>
        <div>{{serie.original_name}}</div>
        <lang-flag :iso="serie.original_language"/>
        <div>{{serie.vote_average}}</div>
    </li>
</template>

<script>
export default {
    name: 'SerieCard',
    props: {
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