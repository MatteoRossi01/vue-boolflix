<template>
    <li>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="poster" :src="imgUrl + imgSize + serie.poster_path " alt="">
                </div>
                <div class="flip-card-back">
                    <div class="prod mrg-top">
                        <span class="text-prod">Titolo:</span>
                        {{serie.name}}
                    </div>
                    <div class="prod">
                        <span class="text-prod">Titolo originale:</span>
                        {{serie.original_name}}
                    </div>
                    <div class="prod">
                        <span class="text-prod">Attori:</span>
                        <span v-for="(actor, index) in casts" :key="index"> {{actor.name}}, </span>   
                    </div>
                    <div class="prod">
                        <span class="text-prod">Genere:</span>
                        <span v-for="(genere, index) in generi" :key="index"> {{genere.name}}, </span>   
                    </div>
                    <div class="star-box">
                        <font-awesome-icon class="star" v-for="(star, index) in votes" :key="index" :icon="star" />
                        <lang-flag class="lang" :iso="serie.original_language"/>
                    </div>
                    <div class="prod">
                        <span class="text-prod">Overview:</span> 
                        {{serie.overview}}
                    </div>
                </div>
            </div>
        </div>
        
    </li>
</template>

<script>
const axios = require('axios');

export default {
    name: 'SerieCard',

    props: {
        'serie': Object,
        'film': Object
    },
    data(){
        return {
            imgSize : 'w300',
            imgUrl: 'https://image.tmdb.org/t/p/',
            voteFive: 0,
            votes: [],
            solidStar: 'fa-solid fa-star',
            regularStar: 'fa-regular fa-star',
            casts: [],
            generi: [],
            api_key: 'd227d9e9d2016a56da2e5f786a0d9c9f',
            id : this.serie.id,
            language : 'it_IT',
        }
    },

    methods : {
        getStar(){
            this.voteFive = Math.ceil(this.serie.vote_average / 2);
            
            for (let i = 0; i < this.voteFive; i++) {
                this.votes.push(this.solidStar);
            }
            
            while(this.votes.length < 5){
                this.votes.push(this.regularStar);
            }
        },

        getActors() {
            axios.get(`https://api.themoviedb.org/3/tv/${this.id}/credits?api_key=${this.api_key}&language=${this.language}`)
            .then((res) => {
                // handle success
                this.casts = res.data.cast.splice(0, 5);
                console.log(this.casts)   
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});    
        },

        getGenres() {
            axios.get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=${this.api_key}&language=${this.language}`)
            .then((res) => {
                // handle success
                this.generi = res.data.genres;
                console.log(this.generi)   
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});    
        },
    },
    created(){
        this.getStar();
        this.getActors();
        this.getGenres();
    }
}
</script>

<style lang="scss">
@import "./src/assets/style/flipCard.scss";

</style>