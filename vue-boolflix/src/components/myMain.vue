<template>
    <main>

        <div class="box-prod">
            <div class="box-film">
                <filmsList :films="films"/>
            </div>
            <div class="box-film">
                <seriesList :series="series"/>
            </div>
        </div>
        
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

<style lang="scss" scoped>
    main {
        background-color: rgb(37, 37, 37);
        min-height: 100vh;

        .box-prod {
            padding-top: 100px;
            width: 80%;
            margin: auto;

            .box-film {
                min-height: 250px;
            }
        }
    }

</style>