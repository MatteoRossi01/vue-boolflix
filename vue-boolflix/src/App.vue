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
    }
  },

  methods: {
      getFilm(keyword) {

        console.log(keyword)

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=d227d9e9d2016a56da2e5f786a0d9c9f&query=casa&lenguage=it-IT')
        .then((response) => {

          console.log(response)
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
