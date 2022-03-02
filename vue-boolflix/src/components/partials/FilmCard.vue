<template>
    <li>
        
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="poster" :src="imgUrl + imgSize + film.poster_path " alt="">
                </div>
                <div class="flip-card-back">
                    <div class="prod mrg-top">
                        <span class="text-prod">Titolo:</span>
                        {{film.title}}
                    </div>
                    <div class="prod">
                        <span class="text-prod">Titolo originale:</span>
                        {{film.original_title}}
                    </div>
                    <div class="star-box">
                        <font-awesome-icon class="star" v-for="(star, index) in votes" :key="index" :icon="star" />
                        <lang-flag class="lang" :iso="film.original_language"/>
                    </div>
                    <div class="prod">
                        <span class="text-prod">Overview:</span> 
                        {{film.overview}}
                    </div>
                </div>
            </div>
        </div>

    </li>
</template>

<script>
export default {
    name: 'FilmCard',
    
    props: {
        'film': Object,
        'serie': Object
    },
    
    data(){
        return {
            imgSize : 'w300',
            imgUrl: 'https://image.tmdb.org/t/p/',
            voteFive: 0,
            votes: [],
            solidStar: 'fa-solid fa-star',
            regularStar: 'fa-regular fa-star'
        }
    },

    methods : {
        getStar(){
            this.voteFive = Math.ceil(this.film.vote_average / 2);
            
            for (let i = 0; i < this.voteFive; i++) {
                this.votes.push(this.solidStar);
            }
            
            while(this.votes.length < 5){
                this.votes.push(this.regularStar);
            }  
        },
    },
    created(){
        this.getStar();
    }
}
</script>

<style lang="scss">
@import "./src/assets/style/flipCard.scss";
     
</style>