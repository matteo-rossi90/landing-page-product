<script>
export default {
    name:'Questions',
    data(){
        return{
            accordionIndex: null,
            infoContent: [
                {
                    icon: "../../public/img/icon/svg_icons/balloon.svg",
                    title: "100% Prodotto di qualità",
                    text: "Abbiamo anche la possibilità di ritiro dallo stagno"
                },
                {
                    icon: "../../public/img/icon/svg_icons/bag-heart.svg",
                    title: "Spedizione gratuita",
                    text: "Dai magazzini alla scrivania"
                },
                {
                    icon: "../../public/img/icon/svg_icons/handiplast.svg",
                    title: "Rimborso garantito",
                    text: "Ti rimborsano se la paperella fa quack"
                }

            ],
            accordionContent: [

                {
                    question: "Come posso utilizzare la paperella di gomma per il debugging?",
                    answer: "Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri"

                },
                {
                    question: "Quali sono i vantaggi di usare una paperella di gomma per i programmatori?",
                    answer: "La paperella di gomma aiuta i programmatori a pensare in modo critico e a verbalizzare i problemi. Questo processo può portare a nuove intuizioni e soluzioni. Inoltre, è un ottimo strumento antistress e aggiunge un tocco di personalità alla scrivania"
                },
                {
                    question: "Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?",
                    answer: "Assolutamente sì! La paperella di gomma è universale e funziona con qualsiasi linguaggio di programmazione. Non importa se stai scrivendo in Python, Java, C++ o qualsiasi altro linguaggio, la paperella sarà sempre pronta ad ascoltarti"
                },
                {
                    question: "Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?",
                    answer: "Dovresti spiegare ogni dettaglio del tuo codice. Più sei dettagliato, più è probabile che tu scopra errori o ottenga nuove prospettive. Questo processo ti costringe a rivedere attentamente ogni parte del tuo lavoro"
                }
            ]
        }
    },
    methods:{
        showAcc(index){
           
            this.accordionIndex = this.accordionIndex === index ? null : index;
        }
    }
}
</script>

<template>

    <div class="box-container">
        <div class="row g-0">

            <h1 class="title">FAQs</h1>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <div id="image-faq">
                    <img src="../../public/img/single-image2.png" alt="single-image">
                </div>

            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">

                <div v-for="(accordion, index) in accordionContent" :key="index">
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="section title-question" @click="showAcc(index)">
                        
                            {{ accordion.question }}
                        
                        </button>
                        <i :class="{'bi bi-plus': accordionIndex !== index, 'bi bi-dash': accordionIndex === index}"></i>

                    </div>
                    <div class="panel"
                    :style="{ maxHeight: accordionIndex === index ? '200px' : '0px' }">
                        <p>
                        {{ accordion.answer }}
                        
                        </p>
                    </div>

                </div>

            </div>

            <div class="spacing-frame">

                <div class="container-fluid">

                    <div class="row g-0 justify-content-center">
                        <div class="content-item">

                            <div class="info" v-for="(item, index) in infoContent" :key="index">
                                <div class="icon-info">
                                    <img :src="item.icon" :alt="item.title">
                                </div>
                                <h4 class="title-quality">
                                    <strong>
                                        {{ item.title }}
                                    </strong>
                                </h4>
                                <p class="text-quality">
                                    {{ item.text }}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        

        </div>

            
    </div>

    
</template>

<style lang="scss" scoped>
@use './style/variables' as*;

#image-faq{
    height: 100%;
    padding: 0 1rem;

    img{
        max-width: 100%;
        object-fit: cover;
    }
}

.text-quality{
    text-align: center;
    color: $main-color;
}

#ul-spacing{
    padding: 0 1rem;

}

.info{
    margin: 0 1.5rem;
}

.title-quality{
    text-align:center;
}

.bi-plus{
    font-size: 20px;
}

.spacing-frame{
    padding-top: 5rem;
}

.title-question{
    font-family: $h-font;
    font-size: 20px;
    font-weight: bold;
    color: $main-color;
}

.section{
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
}

.panel {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
}

.active + .panel {
    max-height: 500px;
}

.icon-info img{
    padding: 1rem 0;
}

    
</style>