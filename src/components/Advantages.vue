<script>

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'Advantages',
    data(){
        return{

            leftColumn: [
                {
                    title: "Lunga durata della batteria",
                    text: "Goditi ore di assistenza continua nella risoluzione dei bug grazie alla lunga durata della 'batteria' (ovvero la tua pazienza) della paperella"
                },
                {
                    title: "Compatibilità universale",
                    text: "Funziona con tutti i linguaggi di programmazione e sistemi operativi, la paperella di gomma è l'unico strumento di debugging che non necessita di aggiornamenti"
                },
                {
                    title: "Design elegante",
                    text: "Mostra con orgoglio il design raffinato ed elegante della tua paperella di gomma, disponibile in vari colori per abbinarsi al tuo stile di programmatore"
                }
            ],
            rightColumn: [
                {
                    title: "Resistenza agli spruzzi",
                    text: "Perfetta per resistere ai piccoli incidenti con caffè e bevande, la tua paperella di gomma non teme schizzi, mantenendoti sempre pronto per il debugging"
                },
                {
                    title: "Portabilità",
                    text: "Leggera e facile da trasportare, la tua paperella può essere il tuo compagno di lavoro ovunque tu vada. Portala con te per un supporto costante."
                },
                {
                    title: "Promemoria anti-stress",
                    text: "Quando lo stress del codice diventa troppo, spremi la paperella di gomma per un rapido sollievo anti-stress senza bisogno di software complicati"
                }
            ]

        }
                
        
    },
    methods: {
        animateAdv() {

            const boxes = document.querySelectorAll(".text-adv");

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
        this.animateAdv();
    },
}
</script>

<template>

    <!-- Sezione informazioni -->
            
        
    <div class="box-container">
        <div class="row g-0">

            <!-- colonna di sinistra -->
            <div class="col-12 col-md-4">

                <div class="row g-0" >
                    <div class="col-sm-12 text-adv" v-for="(content, index) in leftColumn" :key="index">

                        <div class="text-box h-100 d-flex flex-column justify-content-between">
                            <h2 class="title">{{ content.title }}</h2>
                            <p> {{ content.text }}</p>

                        </div>

                    </div>

                </div>

            </div>

            <!-- colonna di centro -->
            <div class="col d-flex justify-content-center align-items-center text-adv">
                <div id="image-body">
                    <img src="../../public/img/invisible.png" alt="">
                </div>
            </div>

            <!-- colonna di destra -->
            <div class="col-12 col-md-4">

                <div class="row g-0">
                    <div class="col-sm-12 text-adv" v-for="(content, index) in rightColumn" :key="index">

                        <div class="text-box h-100 d-flex flex-column justify-content-between">
                            <h2 class="title">{{ content.title }}</h2>
                            <p>{{ content.text }}</p>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    </div>
            


</template>

<style lang="scss" scoped>

#image-body{
    width: 300px;
    height: 300px;
}

#image-body img{
    width: 100%;
    object-fit: contain;
}


</style>