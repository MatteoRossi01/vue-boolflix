<template>
  <div id="app">
    <myHeader @search="getFilm"/>
    <myMain :films="films"/>
  </div>
</template>

<script>
import myMain from './components/myMain.vue';
import myHeader from './components/myHeader.vue';

const axios = require('axios');

export default {
  name: 'App',
  components: {
    myMain,
    myHeader,
  },

  data() {
    return {
      films: [],
      api_key: 'd227d9e9d2016a56da2e5f786a0d9c9f',
      language: 'it-IT',
    }
  },

  methods: {
      getFilm(keyword) {
        console.log(keyword)
        const params = {
          params: {
            'api_key': this.api_key,
            'query': keyword,
            'language': this.language
          }
        }

        axios.get('https://api.themoviedb.org/3/search/movie/', params)
        .then((response) => {
          this.films = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
      }
  }
}
</script>

<style>

</style>
