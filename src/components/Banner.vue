<script>
export default {
    name: 'Banner'
}
</script>

<template>

   <div class="row g-0">
        <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="banner" id="image-duck">
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="banner" id="image-base">
                <div class="text-box">
                    <h1 class="title">Lorem ipsum sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut asperiores eveniet, laborum
                        omnis
                        cupiditate
                        blanditiis
                        iste accusantium quam repudiandae dolorum beatae ipsa
                    </p>
                    <button>Acquista subito</button>
                </div>
            </div>
        </div>
        
    </div>
   
   
</template>

<style lang="scss" scoped>


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

    
</style>