<script>

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Banner',
    methods:{
        animateBanner() {
            const boxes = document.querySelectorAll(".text-banner");

            boxes.forEach((box) => {
                gsap.from(box, {
                    scrollTrigger: {
                        trigger: box,
                        start: "top 80%",
                        end: "top 30%", 
                        toggleActions: "play none none none", 
                    },
                    opacity: 0,
                    y: 50, 
                    duration: 1 
                });
            });
        }

    },
    mounted() {
        this.animateBanner();
    },
}
</script>

<template>

   <div class="row g-0">
        <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="banner" id="image-duck">
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="banner d-flex align-items-center" id="image-base">
                <div class="text-box text-banner">
                    <h1 class="title main-title">Rubber Ducks Debuggings</h1>
                    <p>
                       Spiegare il codice a una paperella di gomma aiuta i programmatori
                       a chiarire il pensiero e individuare errori nascosti
                    </p>
                    <button class="btn-buy">ACQUISTALA SUBITO</button>
                </div>
            </div>
        </div>
        
    </div>
   
   
</template>

<style lang="scss" scoped>
@use './style/variables' as*;

.banner{
    min-height: 300px;
    background-size:cover;
    background-position: center;
}


#image-duck{
    background-image: url('../../public/img/banner-image.png');
}

#image-base {
    background-image: url('../../public/img/banner-bg.png');
    
}

.btn-buy{
    padding: 1rem 2rem;
    border: 1px solid $main-color;
    transition: ease 0.3s;

    &:hover{
        background-color: $main-color;
        color: $header-color;
    }
}

    
</style>