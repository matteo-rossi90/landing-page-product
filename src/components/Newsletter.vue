<script>
export default {
    name: 'Newsletter'
}
</script>

<template>
        
        
    <div class="container-shrink">
        <h1 class="title">
            <strong>Iscriviti per rimanere aggiornato</strong>
        </h1>

        <p class="text-box">Iscriviti alla nostra newsletter per rimanere aggiornato su novità e sconti</p>

        <form action="" class="d-flex">
            <input type="text" placeholder="Inserisci la tua email qui...">
            <button type="submit" id="btn-send">
                <img src="../../public/img/icon/svg_icons/send.svg" alt="">
            </button>
        </form>

        <div id="social-icon" class="d-flex justify-content-center gap-2">
            <div class="round">
                <img src="../../public/img/icon/svg_icons/facebook.svg" alt="">
            </div>
            <div class="round">
                <img src="../../public/img/icon/svg_icons/twitter.svg" alt="">
            </div>
            <div class="round">
                <img src="../../public/img/icon/svg_icons/instagram.svg" alt="">
            </div>
            <div class="round">
                <img src="../../public/img/icon/svg_icons/linkedin.svg" alt="">
            </div>
            <div class="round">
                <img src="../../public/img/icon/svg_icons/youtube.svg" alt="">
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

#btn-send img {
    stroke: $secondary-color;
}

#social-icon{
    padding: 1rem 0;
}

.round{
    display: flex;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 1px solid rgb(194, 194, 194);
    padding: 5px;
}



    
</style>