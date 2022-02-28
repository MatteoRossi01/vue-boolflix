<template>
    <main>
        <filmsList :films='films'/>
    </main>
</template>

<script>
import filmsList from './filmsList.vue';

export default {
    name: 'myMain',
    components: {
        filmsList,
    },
    props: {
        'films': Array
    }
}
</script>

<style>

</style>