<template>
    <li>
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
}
</script>

<style>

</style>