<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
// console.log(Pagination)

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default {
    name: 'Reviews',
    data(){
        return{
            sliderContent: [
                {
                    message: "La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili!",
                    author:"David William",
                    date:"Feb 22, 2023",
                    vote: 5
                },
                {
                    message: "Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!",
                    author:"Emma Turner",
                    date:"April 5, 2023",
                    vote: 5
                },
                {
                    message: "Da quando ho adottato la paperella di gomma, il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le idee e trovare errori nascosti. La porto sempre con me, ovunque vada!",
                    author:"Rachel Bryan",
                    date:"April 18, 2023",
                    vote: 5
                },
                {
                    message: "La mia paperella di gomma è il miglior collega che potessi chiedere. Sempre pronta ad ascoltare, mai giudicante. È sorprendente come qualcosa di così semplice possa essere così efficace nel risolvere problemi complessi. E non dimentichiamo che è anche adorabile!",
                    author:"Park C",
                    date:"May 22, 2023",
                    vote: 5
                },


            ],
            Pagination
        }
    },
    methods:{
        animateReview() {
            const reviews = document.querySelectorAll(".text-review");
            
            
            gsap.from(reviews, {
                scrollTrigger: {
                    trigger: reviews,
                    start: "top 80%",
                    end: "top 30%", 
                    toggleActions: "play play none none", 
                },
                opacity: 0,
                x: 50, 
                duration: 1,
                stagger: 0.3
            });
    
        }
    },
    computed:{
        getStars() {
            return (vote) => {
                let stars = [];
                for (let i = 0; i < 5; i++) {
                    if (i < vote) {
                        stars.push('full');
                    }
                }
                return stars;
            };
        }
    },
    components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.animateReview();
  },
}
</script>

<template>
    
    <div class="box-container">
        
        <div class="row g-0">
            <h1 class="title">Cosa ne pensano i nostri sviluppatori</h1>
            <div class="col-info comment">

                <Swiper
                :modules="[Pagination]"
                :pagination="{ clickable: true }"
                :breakpoints="{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 }
                }">
                    
                    <swiperSlide v-for="(review, index) in sliderContent" :key="index">
                        <div class="text-box text-review">

                            <p>{{ review.message }}</p>
                            <div class="vote">
                                <img v-for="(star, i) in getStars(review.vote)" 
                                     :key="i" 
                                     :src="star === 'full' ? '../../public/img/icon/svg_icons/star-fill.svg' : ''" 
                                     alt="star">
                            </div>
                            <div class="developer">
                                <span>{{ review.author }}</span> - <span>{{ review.date }}</span>
                            </div>

                        </div>

                    </swiperSlide>

                </Swiper>


            </div>

        </div>


    </div>

</template>

<style lang="scss" scoped>
@use './style/variables' as*;

.developer span{
    font-weight: 600;
}

.developer{
    padding-bottom: 1.5rem;
}

.vote{
    padding-bottom: 1rem;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: gray; 
  border-radius: 50%;
}

.swiper-pagination-bullet-active {
  background-color: $icon-color;
}

</style>