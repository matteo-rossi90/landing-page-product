<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Newsletter',
    data(){
        return{
            socialContent:[
                {
                    icon: "../../public/img/icon/svg_icons/facebook.svg",
                    link: "https://www.facebook.com/?locale=it_IT"
                },
                {
                    icon: "../../public/img/icon/svg_icons/twitter.svg",
                    link: "https://x.com/?lang=it"
                },
                {
                    icon: "../../public/img/icon/svg_icons/instagram.svg",
                    link: "https://www.instagram.com/"
                },
                {
                    icon: "../../public/img/icon/svg_icons/linkedin.svg",
                    link: "https://it.linkedin.com/"
                },
                {
                    icon: "../../public/img/icon/svg_icons/youtube.svg",
                    link: "https://www.youtube.com/"
                }
            ]
        }
    },
    methods:{
        animatedNewsletter(){

            const items = document.querySelectorAll('.animated-items')

            gsap.from(items, {
                scrollTrigger:{
                trigger: items,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3
            })
        }
    },
    mounted(){
        this.animatedNewsletter()
    }
}
</script>

<template>
        
        
    <div class="container-shrink">
        <h1 class="title animated-items">
            <strong>Iscriviti per rimanere aggiornato</strong>
        </h1>

        <p class="text-box animated-items">Iscriviti alla nostra newsletter per rimanere aggiornato su novità e sconti</p>

        <form action="" class="d-flex animated-items">
            <input type="text" placeholder="Inserisci la tua email qui...">
            <button type="submit" id="btn-send">
                <img src="../../public/img/icon/svg_icons/send.svg" alt="">
            </button>
        </form>

        <div id="social-icon" class="d-flex justify-content-center gap-2">
            <div class="round animated-items" v-for="(social, index) in socialContent" :key="index">
                <a :href="social.link">
                    <img :src="social.icon" alt="icon">
                </a>
            </div>
        </div>

    </div>
    
    


</template>

<style lang="scss" scoped>

@use './style/variables' as*;

input {
    border-right: none;
    border-top: none;
    border-left: none;
    padding: 0.7rem;
    width: 100%;
    background-color: transparent;
}

form{
    position: relative;
    padding: 1.5rem;
}

#btn-send{
    position: absolute;
    right: 1.5rem;
}

#social-icon{
    padding: 1rem 0;
}

.round a{
    display: flex;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 1px solid rgb(194, 194, 194);
    padding: 5px;
}



    
</style>