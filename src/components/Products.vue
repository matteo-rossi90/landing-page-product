<script>
export default {
    name: 'Products'
}
</script>

<template>
    
    <div class="row g-0">
        <h1 class="title">Una paperella per ogni stile di programmazione</h1>

        <p class="text-product">Una paperella per ogni programmazione</p>

        <div class="product-item">

            <div class="card-item">
                <div class="image-item">
                    <img src="../../public/img/product-item1.png" alt="">
                </div>
                <div class="vote">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                </div>
                <h3 class="product-name">Nome prodotto</h3>
                <h3 class="price">6,00 euro</h3>
            </div>

            <div class="card-item">
                <div class="image-item">
                    <img src="../../public/img/product-item2.png" alt="">
                </div>
                <div class="vote">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                </div>
                <h3 class="product-name">Nome prodotto</h3>
                <h3 class="price">6,00 euro</h3>
            </div>

            <div class="card-item">
                <div class="image-item">
                    <img src="../../public/img/product-item3.png" alt="">
                </div>
                <div class="vote">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                    <img src="../../public/img/icon/svg_icons/star-fill.svg" alt="">
                </div>
                <h3 class="product-name">Nome prodotto</h3>
                <h3 class="price">6,00 euro</h3>
            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>

@use './style/variables' as *;

.text-product{
    margin: 1.5rem 0;
}

.product-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 2rem 1rem;

}

.card-item {
    flex: 0 0 100%;
    width: 100%;
}

.image-item {
    margin-bottom: 1rem;
}

.image-item img,
#image-faq img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.price{
    color: $secondary-color;
}

    
</style>