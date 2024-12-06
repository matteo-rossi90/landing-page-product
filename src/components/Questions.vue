<script>
export default {
    name:'Questions'
}
</script>

<template>

    <div class="box-container">
        <div class="row g-0">

            <h1 class="title">FAQs</h1>

            <div class="col-sm-12 col-md-6 col-lg-6">
                <div id="image-faq">
                    <img src="../../public/img/single-image2.png" alt="">
                </div>

            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">

                <ul id="ul-spacing">
                    <li class="d-flex justify-content-between align-items-center title">
                        <span>
                            <strong>
                                Item accordion
                            </strong>
                        </span>
                        <span>
                            <strong>
                                <i class="bi bi-plus"></i>
                            </strong>
                        </span>
                    </li>

                </ul>

            </div>


        </div>

        <div class="box-container">

            <div class="spacing">

                <div class="row g-0 justify-content-center">
                    <div class="content-item">

                        <div class="info">
                            <div class="icon-info">
                                <img src="../../public/img/icon/svg_icons/balloon.svg" alt="">
                            </div>
                            <h4 class="title">
                                <strong>
                                    Rimborso garantito
                                </strong>
                            </h4>
                            <p class="text-box">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                        <div class="info border-icon">
                            <div class="icon-info">
                                <img src="../../public/img/icon/svg_icons/bag-heart.svg" alt="">
                            </div>
                            <h4 class="title">
                                <strong>
                                    Rimborso garantito
                                </strong>
                            </h4>
                            <p class="text-box">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.

                            </p>

                        </div>

                        <div class="info">
                            <div class="icon-info">
                                <img src="../../public/img/icon/svg_icons/handiplast.svg" alt="">
                            </div>
                            <h4 class="title">
                                <strong>
                                    Rimborso garantito
                                </strong>
                            </h4>
                            <p class="text-box">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.

                            </p>

                        </div>

                    </div>
                </div>

            </div>
        

        </div>

            
    </div>

    
</template>

<style lang="scss" scoped>


#image-faq{
    height: 100%;
    padding: 0 1rem;

    img{
        max-width: 100%;
        object-fit: cover;
    }
}

#ul-spacing,
.accordion{
    padding: 1.5rem;
}

.bi-plus{
    font-size: 20px;
}

    
</style>