<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Advantages from './components/Advantages.vue';
import Reviews from './components/Reviews.vue';
import Products from './components/Products.vue';
import Questions from './components/Questions.vue';
import Newsletter from './components/Newsletter.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    Header,
    Banner,
    Advantages,
    Reviews,
    Products,
    Questions,
    Newsletter,
    Footer
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

    <section class="spacing">
      <Questions/>
    </section>

    <section class="spacing bg-section">
      <Newsletter/>
    </section>

  </main>
  <Footer/>
</template>

<style lang="scss">
@use './components/style/general';
@use './components/style/variables' as *;
@use './components/style/responsive';

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
