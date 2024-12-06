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
  },
  data() {
    return {
      activeSection: 'home', 
    };
  },
  methods:{

    onScroll() {
      const sections = [
        { id: 'home', offset: document.getElementById('home').offsetTop },
        { id: 'advantages', offset: document.getElementById('advantages').offsetTop },
        { id: 'reviews', offset: document.getElementById('reviews').offsetTop },
        { id: 'products', offset: document.getElementById('products').offsetTop },
        { id: 'questions', offset: document.getElementById('questions').offsetTop },
        { id: 'newsletter', offset: document.getElementById('newsletter').offsetTop },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.reduce((prev, curr) => {
        return scrollPosition >= curr.offset ? curr : prev;
      }, sections[0]);

      this.activeSection = currentSection.id;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
}

</script>

<template>
  <Header :activeSection="activeSection"/>
  <main>

    <section>
      <div id="home">
        <Banner/>
      </div>
    </section>

    <section class="spacing">
      <div id="advantages">
        <Advantages/>
      </div>
    </section>

    <section class="spacing">
      <div id="reviews">
        <Reviews/>
      </div>
    </section>

    <section class="bg-section spacing">
      <div id="products">
        <Products/>
      </div>
    </section>

    <section class="spacing">
      <div id="questions">
        <Questions/>
      </div>
    </section>

    <section class="spacing bg-section">
      <div id="newsletter">
        <Newsletter/>
      </div>
    </section>

  </main>
  <Footer/>
  
</template>

<style lang="scss">
@use './components/style/general';
@use './components/style/variables' as *;
@use './components/style/responsive';

a{
  text-decoration: none;
  color: $main-color;
}

html {
  scroll-behavior: smooth;
}

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
