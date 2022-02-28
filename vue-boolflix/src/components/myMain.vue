<template>
    <main>
        <filmsList :films="films"/>
        <seriesList :series="series"/> 
    </main>
</template>

<script>
import filmsList from './filmsList.vue';
import seriesList from './seriesList.vue';

export default {
    name: 'myMain',
    components: {
        filmsList,
        seriesList,
    },
    props: {
        'films': Array,
        'series': Array
    }
}
</script>

<style>

</style>