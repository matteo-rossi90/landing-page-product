<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Advantages from './components/Advantages.vue';
import Reviews from './components/Reviews.vue';
import Products from './components/Products.vue';

export default{
  components:{
    Header,
    Banner,
    Advantages,
    Reviews,
    Products,
  }
}

</script>

<template>
  <Header/>
  <main>

    <section>
      <Banner/>
    </section>

    <section class="spacing">
      <Advantages/>
    </section>

    <section class="spacing">
      <Reviews/>
    </section>

    <section class="bg-section spacing">
      <Products/>
    </section>

    <section>
      
    </section>

  </main>
</template>

<style lang="scss">
@use './components/style/general' as *;
@use './components/style/variables' as *;

header,
body {
    color: $main-color;
}

//proprietà body

p,
.title,
.product-name {
    font-family: $h-font;
    font-weight: $t-weight;
}

.text-box{
    padding: 1.5rem;
}

.bg-section{
    background-color: $bg-color;
}


</style>
