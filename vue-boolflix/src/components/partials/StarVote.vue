<template>
    <i>
        <font-awesome-icon v-for="(star, index) in votes" :key="index" :icon="star" />
    </i>
</template>

<script>
export default {
    name: 'StarVote',
    props : {
        'film' : Object
    },
    data(){
        return {
            voteFive: 0,
            votes: [],
            solidStar: 'fa-solid fa-star',
            regularStar: 'fa-regular fa-star'
        }
    },

    methods : {
        getStar(){
            this.voteFive = Math.ceil(this.film.vote_average / 2);
            console.log(this.voteFive);
            
            for (let i = 0; i < this.voteFive; i++) {
                this.votes.push(this.solidStar);
            }
            
            while(this.votes.length < 5){
                this.votes.push(this.regularStar);
            }
        }
    },
    created(){
        this.getStar();
    }
}
</script>

<style>

</style>